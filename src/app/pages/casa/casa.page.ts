import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-casa',
  templateUrl: './casa.page.html',
  styleUrls: ['./casa.page.scss'],
})
export class CasaPage implements OnInit {
  weatherTemp :any
  weatherDescription :any
  coordenadas :any
  latitud :any
  longitud :any
  todayDate = new Date()
  profile: any = null;
  constructor(private authService:AuthService, 
    private avatarService: AvatarService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router:Router, public httpClient:HttpClient) {
      this.fetchLocation();
      this.cargarAvatar();
    }
  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/',{replaceUrl:true});
  }

  cargarAvatar(){
    this.avatarService.getUserProfile().subscribe(respuesta => {
      this.profile = respuesta;
    })
  }
  async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType:CameraResultType.Base64,
      source:CameraSource.Camera //Photo o prompt
    });
    console.log(avatar);

    if(avatar){
      const loading = await this.loadingCtrl.create();
      await loading.present();
      const result = await this.avatarService.uploadAvatar(avatar);
      loading.dismiss();

      if(!result){
        this.alertPresent('Carga avatar fallida','Se ha producido un error, inténtelo más rato.');
      }
    }
  }
  async alertPresent(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons: ['OK']
    });
    await alert.present();
  }
   async fetchLocation(){
    const location = await Geolocation.getCurrentPosition();
      console.log('location = ', location);
      this.coordenadas = location['coords']
      this.latitud = this.coordenadas['latitude']
      this.longitud = this.coordenadas['longitude']
      console.log('latitud = ',this.latitud);
      console.log('longitud = ',this.longitud);
      this.loadData();
  }

  ngOnInit() {
  }

  loadData(){
      this.httpClient.get(`${API_URL}/weather?lat=${this.latitud}&lon=${this.longitud}&appid=${API_KEY}&units=metric`).subscribe(results =>{
      console.log(results);
      this.weatherTemp = results['main']
      this.weatherDescription = results['weather']
      this.weatherDescription = this.weatherDescription['0']
      console.log(this.weatherTemp);
      console.log(this.weatherDescription);
    })
  }

}