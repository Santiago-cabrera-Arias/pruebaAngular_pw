import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroServiceService {

  constructor(private afs: AngularFirestore) { }

  consumirFirebase() : Observable<any[]> {
    const refPersona = this.afs.collection("pruebaFiltro")
    console.log("holiwi")
    return refPersona.valueChanges();
  }




}


