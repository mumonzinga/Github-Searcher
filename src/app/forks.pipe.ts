import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forks'
})
export class ForksPipe implements PipeTransform {

  transform(value: number, args?: any) {
    if (value < 5) {
      return value + 'This is a junior developer';
    } else {
      return value + 'This is an experienced developer';
    }
  }

}
