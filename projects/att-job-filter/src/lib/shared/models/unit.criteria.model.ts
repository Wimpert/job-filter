import { AbstractHardListCriteria } from './abstract.hardlist.criteria.model';

export class UnitCriteria extends AbstractHardListCriteria {


    static readonly emptyStringRepresentation = 'Select a unit';

    get stringRepresentation(): string {
        return this.value ? `Ìs part of unit: ${this.value}` : '';
    }


    options = [
        'UNIT 1',
        'An other unit ',
        'the best unit ',
        'no body want to be in this unit ',
    ];

    value: string;

}
