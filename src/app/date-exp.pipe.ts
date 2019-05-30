import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateEXP'
})
export class DateEXPPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let date = value.replace(/\T/, ' ')    
    return date;
  }

}
