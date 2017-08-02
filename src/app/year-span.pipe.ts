import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearSpan'
})
export class YearSpanPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.start ** value.end) {
      return `${value.start} - ${value.end}`;
    }
    return null;
  }

}
