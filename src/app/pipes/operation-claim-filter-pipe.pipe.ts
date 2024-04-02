import { Pipe, PipeTransform } from '@angular/core';
import { OperationClaim } from '../models/entities/operationClaim';

@Pipe({
  name: 'operationClaimFilterPipe'
})
export class OperationClaimFilterPipePipe implements PipeTransform {

  transform(value: OperationClaim[], filterText: string): OperationClaim[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((operationClaim: OperationClaim) => operationClaim.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
