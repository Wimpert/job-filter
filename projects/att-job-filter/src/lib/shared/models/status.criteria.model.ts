import { AbstractHardListCriteria } from './abstract.hardlist.criteria.model';

export class StatusCriteria extends AbstractHardListCriteria {

    static readonly emptyStringRepresentation = 'Select a status';

    get stringRepresentation(): string {
        return this.value ? `Ìs: ${this.value}` : '';
    }


    options = [
        'In Service', 'Out of service'
    ];

    value: string;
}
