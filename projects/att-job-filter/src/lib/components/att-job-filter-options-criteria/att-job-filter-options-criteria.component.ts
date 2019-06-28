import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstactCriteriaComponent } from '../../shared/models/abstact.criteria.component';
import { AbstractHardListCriteria } from '../../shared/models/abstract.hardlist.criteria.model';

@Component({
  selector: 'att-job-filter-options-criteria',
  templateUrl: './att-job-filter-options-criteria.component.html',
  styleUrls: ['./att-job-filter-options-criteria.component.scss']
})
export class AttJobFilterOptionsCriteriaComponent extends AbstactCriteriaComponent<AbstractHardListCriteria> implements OnInit {


  @Input()
  criteria: AbstractHardListCriteria;

  @Output()
  criteriaUpdated: EventEmitter<AbstractHardListCriteria> = new EventEmitter<AbstractHardListCriteria>();

  @Output()
  criteriaUpdateFinished: EventEmitter<AbstractHardListCriteria> = new EventEmitter<AbstractHardListCriteria>();

  mappedOptions: Array<{displayValue: string, data: any}>;

  ngOnInit(): void {
    this.mappedOptions = this.criteria.options.map(option => ({displayValue: option, data: option}));
  }

  handleOptionsClicked(option) {
    this.criteriaUpdateFinished.emit({... this.criteria, value: option.data});
  }


}
