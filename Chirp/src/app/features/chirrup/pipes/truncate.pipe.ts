import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (typeof value === 'string' && value.length > 20) {
      return value.slice(0, 20) + '...';
    } else {
      return value ?? '';
    }
  }
}
