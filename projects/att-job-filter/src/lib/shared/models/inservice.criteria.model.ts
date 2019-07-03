import { AbstractPeriodCriteria } from './abstract.period.criteria.model';
import { CriteriaType } from './criteria.type.model';

export class InserviceCriteria extends AbstractPeriodCriteria {

    readonly emptyStringRepresentation = 'In service from - to ';

    get stringRepresentation(): string {
        return `In service from ${(this.value && this.value.from) ? this.value.from.toLocaleDateString() : ''}
                to ${this.value && this.value.to ? this.value.to.toLocaleDateString() : '' }`;
    }

    value: {from: Date, to: Date};

    type = CriteriaType.PERIOD;
}

