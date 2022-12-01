import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';


@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  coordenadas: any
  latitud: any
  longitud: any

  constructor() { }

  async getLocation() {
    const location = await Geolocation.getCurrentPosition();
    return location['coords'];
  }
}
