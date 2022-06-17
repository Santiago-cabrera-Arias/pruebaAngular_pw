import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultado = []

    for(const dtos of value){

      if(dtos.nombre.indexOf(args)>-1 || dtos.cedula.indexOf(args)>-1 || dtos.email.indexOf(args)>-1){
        resultado.push(dtos)
      } 

    }
    
    return resultado;
  }

  




}
