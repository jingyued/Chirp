import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: any[], field: string): any[] {
    if (!value || !field || !value.length) return value;
    return value.sort((a, b) => new Date(b[field]).getTime() - new Date(a[field]).getTime());
  }
}
