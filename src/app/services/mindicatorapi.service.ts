import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class MindicatorapiService {


  urlEndPoint: string = 'https://mindicador.cl/api' 

  constructor(private httpClient: HttpClient) { }

   getIndicadores(): Promise<any> {
    return new Promise((resolve,reject) =>{
      this.httpClient.get(`${this.urlEndPoint}`)
      .subscribe(respuesta => {
        resolve(respuesta)
        

      },
      (err) => {
        reject (err)
      })
    })
   } 
   
}