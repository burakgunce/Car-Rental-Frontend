import { Pipe, PipeTransform } from '@angular/core';
import { ModelColorDetail } from '../models/details/modelColorDetail';

@Pipe({
  name: 'modelColorDetailFilterPipe'
})
export class ModelColorDetailFilterPipePipe implements PipeTransform {

  transform(value: ModelColorDetail[], filterText: string): ModelColorDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((modelColorDetail: ModelColorDetail) => modelColorDetail.modelName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
