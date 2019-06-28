import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'att-job-filter-option-picker',
  templateUrl: './att-job-filter-option-picker.component.html',
  styleUrls: ['./att-job-filter-option-picker.component.scss']
})
export class AttJobFilterOptionPickerComponent {

  @Input() options: Array<{displayValue: string, data: any}>;

  @Output() optionClicked = new EventEmitter<{displayValue: string, data: any}>();


  test() {
    console.log('dqmlfj');
  }
}
