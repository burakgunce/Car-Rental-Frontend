import { Pipe, PipeTransform } from '@angular/core';
import { UserOperationClaimDetail } from '../models/details/userOperationClaimDetail';

@Pipe({
  name: 'userOperationClaimDetailFilterPipe'
})
export class UserOperationClaimDetailFilterPipePipe implements PipeTransform {

  transform(value: UserOperationClaimDetail[], filterText: string): UserOperationClaimDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((customerDetail: UserOperationClaimDetail) => customerDetail.lastName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
