import { AttJobFilterDateCriteriaComponent } from '../../components/att-job-filter-date-criteria/att-job-filter-date-criteria.component';
import { Criteria } from './criteria.model';
import { CriteriaType } from './criteria.type.model';

export abstract class AbstractDateCriteria extends Criteria {

    static type = CriteriaType.DATE;
    static emptyStringRepresentation: string;
    componentClass = AttJobFilterDateCriteriaComponent;
    type: CriteriaType;

    abstract stringRepresentation;
    abstract value: Date;


}
