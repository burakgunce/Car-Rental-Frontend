import { Pipe, PipeTransform } from '@angular/core';
import { UserForInfoDetail } from '../models/details/userForInfoDetail';

@Pipe({
  name: 'userLastNameFilterPipe'
})
export class UserLastNameFilterPipePipe implements PipeTransform {

  transform(value: UserForInfoDetail[], filterText: string): UserForInfoDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((user: UserForInfoDetail) => user.lastName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
