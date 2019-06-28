import { AbstractPeriodCriteria } from './abstract.period.criteria.model';
import { CriteriaType } from './criteria.type.model';

export class InserviceCriteria extends AbstractPeriodCriteria {

    readonly emptyStringRepresentation = 'In service from - to ';

    get stringRepresentation(): string {
        return `In service from ${this.value.from} to ${this.value.to}`;
    }

    value: {from: undefined, to: undefined};

    type = CriteriaType.PERIOD;
}

