import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  
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
        source:CameraSource.Camera
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
