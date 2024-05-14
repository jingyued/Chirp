import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
// Convert the string that is longer than 20 characters to first 20 characters + ...
export class TruncatePipe implements PipeTransform {
  transform(value: string | undefined, maxLength: number = 20): string {
    if (typeof value === 'string' && value.length >= maxLength) {
      return value.slice(0, maxLength) + '...';
    } else {
      return value ?? '';
    }
  }
}
