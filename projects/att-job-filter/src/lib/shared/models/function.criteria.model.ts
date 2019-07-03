import { AbstractHardListCriteria } from './abstract.hardlist.criteria.model';
import { CriteriaType } from './criteria.type.model';

export class FunctionCriteria extends AbstractHardListCriteria {

    get stringRepresentation(): string {
        return this.value ? `the function is: ${this.value}` : '';
    }

    readonly emptyStringRepresentation = 'Select a function:';

    options = [
        'Software Engineer', 'Test Engineer', 'Functional Analyst'
    ];



    value: string;

    type = CriteriaType.HARD_LIST;
}
