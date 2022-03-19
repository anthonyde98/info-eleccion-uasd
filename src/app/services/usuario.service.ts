import { Injectable } from '@angular/core';
import { collection, collectionData, CollectionReference, Firestore, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Usuario {
  matricula: string;
  nombres: string;
  apellidos: string;
  carrera: string;
  escuela: string;
  facultad: string;
  vota: boolean;
  lugarVotacion: string;
  fecha: string;
}

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private usuario!: Observable<Usuario[]>;

  constructor(private fire: Firestore) { }

  buscarUsuario(matricula: string){
    return this.usuario = collectionData<Usuario>(
      query<Usuario>(
        collection(this.fire, 'usuario') as CollectionReference<Usuario>,
        where('matricula', '==', matricula)
      )
    );
  }

  obtenerUsuario(){
    return this.usuario;
  }
}
