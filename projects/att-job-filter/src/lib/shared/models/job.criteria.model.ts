import { Criteria } from './criteria.model';

export class JobCriteria extends Criteria {

    static readonly emptyStringRepresentation  = 'Select a job';

    componentClass = undefined;

    get stringRepresentation(): string {
        return this.value ? `${this.value}` : '';
    }


    value: any;


}
