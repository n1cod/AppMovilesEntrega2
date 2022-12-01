import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    AppComponent
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
