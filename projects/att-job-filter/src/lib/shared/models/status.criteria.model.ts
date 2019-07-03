import { AbstractHardListCriteria } from './abstract.hardlist.criteria.model';
import { CriteriaType } from './criteria.type.model';

export class StatusCriteria extends AbstractHardListCriteria {

    get stringRepresentation(): string {
        return this.value ? `Ìs: ${this.value}` : '';
    }

    readonly emptyStringRepresentation = 'Select a status';

    options = [
        'In Service', 'Out of service'
    ];



    value: string;

    type = CriteriaType.HARD_LIST;
}
