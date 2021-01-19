import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: number): string {
    const date = new Date(value * 1000);
    const months = {
      0: 'Ene',
      1: 'Feb',
      2: 'Mar',
      3: 'Abr',
      4: 'May',
      5: 'Jun',
      6: 'Jul',
      7: 'Ago',
      8: 'Sep',
      9: 'Oct',
      10: 'Nov',
      11: 'Dic',
    }

    return value ?
      `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}` :
      '';
  }

}
