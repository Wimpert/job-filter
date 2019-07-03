import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Criteria } from '../../shared/models/criteria.model';

@Component({
  selector: 'att-job-filter-criteria-label',
  templateUrl: './att-job-filter-criteria-label.component.html',
  styleUrls: ['./att-job-filter-criteria-label.component.scss']
})
export class AttJobFilterCriteriaLabelComponent  {

  @Input()
  criteria: Criteria;

  @Output()
  closeCriteriaButtonClicked = new  EventEmitter<Criteria>();

  @HostBinding('class.excluding')
   get excluding() {
     return !this.criteria.including;
  }

}
