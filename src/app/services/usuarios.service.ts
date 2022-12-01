import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, docData, updateDoc, deleteDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from './usuarios';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private firestore: Firestore) { }

  getUsuarios(): Observable<Usuario[]>{
    const usuarioRef = collection(this.firestore,'usuarios');
    return collectionData(usuarioRef, {idField: 'id'}) as Observable<Usuario[]>;
  }

   
  getUsuarioById(id:string): Observable<Usuario> {
    const usuarioRef = doc(this.firestore,`usuarios/${id}`);
    return docData(usuarioRef,{idField:'id'}) as Observable<Usuario>;
  }

  addUsuario(usuario:Usuario){
    const usuariosRef = collection(this.firestore,'usuarios');
    return addDoc(usuariosRef,usuario);
  }
  updateUsuario(usuario: Usuario){
    const usuarioRef = doc(this.firestore,`usuarios/${usuario.id}`);
    return updateDoc(usuarioRef,
      {
        name:usuario.name,
        lastname:usuario.lastname,
        direccion:usuario.direccion,
        age:usuario.age,
        modelo:usuario.modelo,
        patente:usuario.patente,
        email:usuario.email,
        password: usuario.password,
        imagen:usuario.imagen
        
      });
  }
  deleteUsuario(usuario:Usuario){
    const usuarioRef = doc(this.firestore,`usuarios/${usuario.id}`);
    return deleteDoc(usuarioRef) ;
  }





}
