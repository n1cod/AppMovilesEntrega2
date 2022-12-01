import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  public appPages = [
    { title: 'Inicio', url: 'casa', icon: 'home' },
    { title: 'Mi Perfil', url: 'perfil', icon: 'man' },
    { title: 'Conversor de Moneda', url: 'conversor', icon: 'cash' },
    { title: 'El Clima', url: 'clima', icon: 'cloud' },
    { title: 'Nosotros', url: 'about', icon: 'people' },
    { title: 'Contactanos', url: 'contact', icon: 'information-circle' },
    { title: 'Cerrar Sesión', url: '/home', icon: 'log-out' },
  ];

  
  profile: any = null;
  constructor(private authService:AuthService, 
    private avatarService: AvatarService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router:Router) {
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


  ngOnInit() {
  }

}
