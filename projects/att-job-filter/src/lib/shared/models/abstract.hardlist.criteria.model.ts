import { AttJobFilterOptionsCriteriaComponent } from '../../components/att-job-filter-options-criteria/att-job-filter-options-criteria.component';
import { Criteria } from './criteria.model';
import { CriteriaType } from './criteria.type.model';

export abstract class AbstractHardListCriteria implements Criteria {

    static type = CriteriaType.HARD_LIST;
    componentClass = AttJobFilterOptionsCriteriaComponent;
    type: CriteriaType;

    abstract options: Array<any>;
    abstract emptyStringRepresentation;
    abstract stringRepresentation;
    abstract value;


}
