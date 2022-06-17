import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { FiltroServiceService } from 'src/app/services/filtro-service.service';

@Component({
  selector: 'app-filtrar-datos',
  templateUrl: './filtrar-datos.component.html',
  styleUrls: ['./filtrar-datos.component.css']
})
export class FiltrarDatosComponent implements OnInit {

  persona: Persona = new Persona();
  datos : any;
  seleccionado : any;
  filtro = '';
  lista:string[]=["nombre","cedula","email"];

  constructor(private servicio:FiltroServiceService,private route:ActivatedRoute, private routex: Router) { }

  ngOnInit(): void {
    this.servicio.consumirFirebase().subscribe((data) => { this.datos = data 
    console.log(this.datos)
    })
    console.log(this.datos)
 }



}
 
 
