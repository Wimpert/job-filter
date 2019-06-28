import { EventEmitter, Input, Output } from '@angular/core';
import { Criteria } from './criteria.model';

export abstract class AbstactCriteriaComponent<T extends Criteria> {


    @Input()
    abstract criteria: T ;

    @Output()
    abstract criteriaUpdated: EventEmitter<T>;

    @Output()
    abstract criteriaUpdateFinished: EventEmitter<T>;


}
