import { Pipe, PipeTransform } from '@angular/core';
import { CustomerDetail } from '../models/details/customerDetail';

@Pipe({
  name: 'customerDetailFirstNameFilterPipe'
})
export class CustomerDetailFirstNameFilterPipePipe implements PipeTransform {

  transform(value: CustomerDetail[], filterText: string): CustomerDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((customerDetail: CustomerDetail) => customerDetail.firstName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
