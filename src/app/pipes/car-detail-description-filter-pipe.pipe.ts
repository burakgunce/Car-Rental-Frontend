import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carDetailDescriptionFilterPipe'
})
export class CarDetailDescriptionFilterPipePipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 20) + "...";
  }

}
