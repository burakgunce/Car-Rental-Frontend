import { Pipe, PipeTransform } from '@angular/core';
import { ModelDetail } from '../models/details/modelDetail';

@Pipe({
  name: 'modelDetailFilterPipe'
})
export class ModelDetailFilterPipePipe implements PipeTransform {

  transform(value: ModelDetail[], filterText: string): ModelDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((modelDetail: ModelDetail) => modelDetail.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
