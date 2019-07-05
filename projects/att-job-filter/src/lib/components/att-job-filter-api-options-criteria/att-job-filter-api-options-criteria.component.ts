import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbstactCriteriaComponent } from '../../shared/models/abstact.criteria.component';
import { AbstractApiListCriteria } from '../../shared/models/abstract.apilist.criteria.model';
import { GeneralOptionsService } from '../../shared/services/general-options/general-options.service';

@Component({
  selector: 'att-job-filter-api-options-criteria',
  templateUrl: './att-job-filter-api-options-criteria.component.html',
  styleUrls: ['./att-job-filter-api-options-criteria.component.scss']
})
export class AttJobFilterApiOptionsCriteriaComponent implements OnInit, AbstactCriteriaComponent<AbstractApiListCriteria>  {


@Input()
criteria: AbstractApiListCriteria;

@Output()
criteriaUpdated: EventEmitter < AbstractApiListCriteria > = new EventEmitter<AbstractApiListCriteria>();

@Output()
criteriaUpdateFinished: EventEmitter < AbstractApiListCriteria > = new EventEmitter<AbstractApiListCriteria>();

mappedOptions$: Observable<Array<{displayValue: string, data: any}>>;

constructor(private readonly generalOptionsService: GeneralOptionsService) {

}

ngOnInit() {

  this.mappedOptions$ =  this.generalOptionsService.getOptions(this.criteria.url).pipe(
    map(input => this.criteria.mapFunction(input))
  );

}

handleOptionsClicked(value): void {
  this.criteria.value = value.displayValue;
  this.criteriaUpdateFinished.emit(this.criteria);
}

}
