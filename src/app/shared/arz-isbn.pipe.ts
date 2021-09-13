import { Pipe, PipeTransform } from '@angular/core';
// @ts-ignore
import ISBN from 'isbn3';

@Pipe({
  name: 'arzIsbn'
})
export class ArzIsbnPipe implements PipeTransform {

  /**
   * 
   * @param value Die ISBN
   * @param foo 
   * @returns Die formatierte ISBN
   */
  transform(value?: string, foo = false): string | undefined {
    return ISBN.hyphenate(value);
  }

}
