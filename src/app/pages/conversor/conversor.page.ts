import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { MindicatorapiService } from 'src/app/services/mindicatorapi.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {

getdata:any[]=[];


indicadores: any;
UF: any;
Dolar: any;
Euro: any ;
CLP: number = 0;
respuestaCarga: boolean=false;
conversion: number = 0;

  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

  constructor(public mindicatorapiService: MindicatorapiService, private navController: NavController) {}


  ngOnInit(): void {
    this.cargarUf();
  }

  async cargarUf(cargarmasUf:boolean = false, event?){

    await this.mindicatorapiService.getIndicadores()
    .then(respuesta => {
      this.indicadores = respuesta;
      this.UF = respuesta.uf;
      this.Dolar = respuesta.dolar;
      this.Euro = respuesta.euro;
      
      this.respuestaCarga = true;
    },
    (err) => {
      console.log(err);
    });
  }


  ConvertirEuro() {
    
    this.conversion = this.CLP/parseFloat(this.Euro.valor)
    
  }
  ConvertirDolar() {
    
    this.conversion = this.CLP/parseFloat(this.Dolar.valor)

  }
  limpiarCampo(){
    this.conversion = 0;
    this.CLP = 0;
  }

}
