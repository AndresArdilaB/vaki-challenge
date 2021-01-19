import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysToEnd'
})
export class DaysToEndPipe implements PipeTransform {

  transform(value: number): number {
    const date = new Date(value * 1000).getTime();
    const today = new Date().getTime();
    const diff = date - today;

    return value ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0;
  }

}
