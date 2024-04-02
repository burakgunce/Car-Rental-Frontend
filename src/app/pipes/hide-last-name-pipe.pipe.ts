import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideLastNamePipe'
})
export class HideLastNamePipePipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 3) + "...";
  }

}
