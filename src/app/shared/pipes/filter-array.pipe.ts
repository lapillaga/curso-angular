import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  // Value: Es el valor de la izquierda del pipe
  // args: Es el valor de la derecha del pipe
  // Status pipe para mostrar el mensaje de un array
  transform(value: any[], search?: string): any {
    return value.filter(({nombre}) => nombre.toLowerCase().includes(search?.toLowerCase()));
  }

}
