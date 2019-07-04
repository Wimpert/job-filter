import { Component, EventEmitter, Input, Output } from '@angular/core';
import { of } from 'rxjs';
import { AbstactCriteriaComponent } from '../../shared/models/abstact.criteria.component';
import { AbstractDateCriteria } from '../../shared/models/abstract.date.criteria.model';


@Component({
  selector: 'att-job-filter-date-criteria',
  templateUrl: './att-job-filter-date-criteria.component.html',
  styleUrls: ['./att-job-filter-date-criteria.component.scss']
})
export class AttJobFilterDateCriteriaComponent implements AbstactCriteriaComponent<AbstractDateCriteria> {

  @Input()
  criteria: AbstractDateCriteria;

  @Output()
  criteriaUpdated: EventEmitter<AbstractDateCriteria> = new EventEmitter<AbstractDateCriteria>();

  @Output()
  criteriaUpdateFinished: EventEmitter<AbstractDateCriteria> = new EventEmitter<AbstractDateCriteria>();

showDropdown$ = of(true);



  handleDatePicked(date: Date) {
    this.criteria.value = date;
    this.criteriaUpdateFinished.emit(this.criteria);
  }

}
