import { Criteria } from './criteria.model';
import { CriteriaType } from './criteria.type.model';

export class NameCriteria implements Criteria {

    readonly emptyStringRepresentation = 'SeletectName';

    get stringRepresentation(): string {
        return this.value ? `where name contains ${this.value}` : '';
    }

    value: string;

    type = CriteriaType.STRING;
}
