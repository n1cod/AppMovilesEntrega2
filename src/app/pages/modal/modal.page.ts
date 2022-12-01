import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() id:string;
  usuario: Usuario = null;

  constructor(private usuarioService:UsuariosService, private modalCtrl:ModalController,
    private toastCtrl:ToastController) { }

  ngOnInit() {
    this.getUsuario();
  }

  getUsuario(){
    this.usuarioService.getUsuarioById(this.id).subscribe(respuesta => {
      this.usuario = respuesta;
    })
  }

  async updateUsuario(){
    this.usuarioService.updateUsuario(this.usuario);
    this.modalCtrl.dismiss();
    this.toastPresent('Usuario actualizado');
  }

  async deleteUsuario(){
    this.usuarioService.deleteUsuario(this.usuario);
    this.modalCtrl.dismiss();
    this.toastPresent('Usuario eliminado');
  }

  async toastPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000,
    });
    toast.present();
  }

}
