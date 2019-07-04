import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'att-job-filter-filterable-options-picker',
  templateUrl: './att-job-filter-filterable-options-picker.component.html',
  styleUrls: ['./att-job-filter-filterable-options-picker.component.scss']
})
export class AttJobFilterFilterableOptionsPickerComponent {

  @Input() options: Array<{displayValue: string, data: any}>;

  @Output() optionClicked = new EventEmitter<{displayValue: string, data: any}>();

  filterValue: string;

  filterValueChanged(event) {
    this.filterValue = event.target.value;
  }


}
