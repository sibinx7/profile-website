import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strigify'
})
export class StrigifyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    return JSON.stringify(value)
  }

}
