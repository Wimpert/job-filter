import { AttJobFilterOptionsCriteriaComponent } from '../../components/att-job-filter-options-criteria/att-job-filter-options-criteria.component';
import { Criteria } from './criteria.model';
import { CriteriaType } from './criteria.type.model';

export abstract class AbstractHardListCriteria extends Criteria {

    static type = CriteriaType.HARD_LIST;
    static emptyStringRepresentation: string;

    componentClass = AttJobFilterOptionsCriteriaComponent;
    type: CriteriaType;

    abstract options: Array<any>;
    abstract stringRepresentation;
    abstract value;



}
