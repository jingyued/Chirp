import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateAvatar'
})
export class TruncateAvatarPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (typeof value === 'string' && value.length > 0) {
      return value.charAt(0).toUpperCase();
    }
    return '';
  }

}
