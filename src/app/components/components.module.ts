import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    SidemenuComponent,
    HeaderComponent
    
  ],
  imports: [
    CommonModule,
    IonicModule
    
  ],
  exports: [
    SidemenuComponent,
    HeaderComponent
    
  ]

})
export class ComponentsModule { }
