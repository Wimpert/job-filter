import { AbstractHardListCriteria } from './abstract.hardlist.criteria.model';

export class FunctionCriteria extends AbstractHardListCriteria {

    get stringRepresentation(): string {
        return this.value ? `the function is: ${this.value}` : '';
    }

    static readonly emptyStringRepresentation = 'Select a function:';

    options = [
        'Software Engineer', 'Test Engineer', 'Functional Analyst'
    ];
    value: string;
}
