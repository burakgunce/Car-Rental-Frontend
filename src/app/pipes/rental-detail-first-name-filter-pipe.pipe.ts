import { Pipe, PipeTransform } from '@angular/core';
import { RentalDetail } from '../models/details/rentalDetail';

@Pipe({
  name: 'rentalDetailFirstNameFilterPipe'
})
export class RentalDetailFirstNameFilterPipePipe implements PipeTransform {

  transform(value: RentalDetail[], filterText: string): RentalDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((rentalDetail: RentalDetail) => rentalDetail.firstName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
