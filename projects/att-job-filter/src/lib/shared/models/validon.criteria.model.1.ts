import { AbstractDateCriteria } from './abstract.date.criteria.model';
import { CriteriaType } from './criteria.type.model';

export class ValidOnCriteria extends AbstractDateCriteria {

    static readonly emptyStringRepresentation = 'Valid on';

    get stringRepresentation(): string {
        return `Valid on: ${(this.value && this.value) ? this.value.toLocaleDateString() : ''}`;
    }

    value: Date;

    type = CriteriaType.DATE;
}

