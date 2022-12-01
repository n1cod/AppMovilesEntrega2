import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle = "Home";
  isNotHome = false;
  nombre: string = '';
  apellido: string = '';
  loading : HTMLIonLoadingElement;

  usuarios: Usuario[] = [];
  
  constructor(private usuarioService: UsuariosService, private alertCtrl:AlertController, 
    private toastCtrl: ToastController, private modalCtrl:ModalController, private router:Router) {
    this.getUsuarios();
  }


  getUsuarios(){
  this.usuarioService.getUsuarios().subscribe(respuesta => {
  console.log(respuesta);
  this.usuarios = respuesta;
  })
  }

  ngOnInit() {
  
  }

  goToLogin(){
    this.router.navigateByUrl('/login',{replaceUrl:true});
  }
  }
