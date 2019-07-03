import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { of } from 'rxjs';
import { AbstactCriteriaComponent } from '../../shared/models/abstact.criteria.component';
import { AbstractPeriodCriteria } from '../../shared/models/abstract.period.criteria.model';

@Component({
  selector: 'att-job-filter-period-criteria',
  templateUrl: './att-job-filter-period-criteria.component.html',
  styleUrls: ['./att-job-filter-period-criteria.component.scss']
})
export class AttJobFilterPeriodCriteriaComponent extends AbstactCriteriaComponent<AbstractPeriodCriteria> implements OnInit {


  @Input()
  criteria: AbstractPeriodCriteria;

  @Output()
  criteriaUpdated: EventEmitter<AbstractPeriodCriteria> = new EventEmitter<AbstractPeriodCriteria>();

  @Output()
  criteriaUpdateFinished: EventEmitter<AbstractPeriodCriteria> = new EventEmitter<AbstractPeriodCriteria>();

showDropdown$ = of(true);

ngOnInit() {
  }

  handleDatePicked(date: Date) {
    if (!this.criteria.value) {
      this.criteria.value = {from: undefined, to: undefined};
    }
    if (!this.criteria.value.from) {
      this.criteria.value.from =  date;
    } else {
      this.criteria.value.to = date;
      this.criteriaUpdateFinished.emit(this.criteria);
    }
  }

}
