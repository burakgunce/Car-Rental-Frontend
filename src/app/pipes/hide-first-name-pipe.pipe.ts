import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideFirstNamePipe'
})
export class HideFirstNamePipePipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 3) + "...";
  }

}
