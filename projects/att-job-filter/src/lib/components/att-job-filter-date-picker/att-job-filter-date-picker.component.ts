import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'att-job-filter-date-picker',
  templateUrl: './att-job-filter-date-picker.component.html',
  styleUrls: ['./att-job-filter-date-picker.component.scss']
})
export class AttJobFilterDatePickerComponent  {

  @Output() datePicked: EventEmitter<Date> = new EventEmitter<Date>();

  pickADate() {
    this.datePicked.emit(new Date());
  }

}
