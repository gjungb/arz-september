import { Pipe, PipeTransform } from '@angular/core';
import ISBN from 'isbn3';

@Pipe({
  name: 'arzIsbn'
})
export class ArzIsbnPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return ISBN.hyphenate(value);
  }

}
