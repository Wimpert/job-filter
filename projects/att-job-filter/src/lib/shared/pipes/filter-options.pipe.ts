import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOptions'
})
export class FilterOptionsPipe implements PipeTransform {

  transform(values: Array<{displayValue: string, data: any}>, filterValue: string): any {
    if (!filterValue) {
      return values;
    }
    return values.filter(value => value.displayValue.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);
  }
}
