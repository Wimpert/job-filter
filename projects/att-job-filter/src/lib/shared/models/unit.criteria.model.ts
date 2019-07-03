import { AbstractHardListCriteria } from './abstract.hardlist.criteria.model';
import { CriteriaType } from './criteria.type.model';

export class UnitCriteria extends AbstractHardListCriteria {

    get stringRepresentation(): string {
        return this.value ? `Ìs part of unit: ${this.value}` : '';
    }

    readonly emptyStringRepresentation = 'Select a unit';

    options = [
        'UNIT 1',
        'An other unit ',
        'the best unit ',
        'no body want to be in this unit ',
    ];



    value: string;

    type = CriteriaType.HARD_LIST;
}
