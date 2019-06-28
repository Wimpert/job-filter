import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  ngOnInit() {
  }

}
