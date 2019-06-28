import { AttJobFilterPeriodCriteriaComponent } from '../../components/att-job-filter-period-criteria/att-job-filter-period-criteria.component';
import { Criteria } from './criteria.model';
import { CriteriaType } from './criteria.type.model';

export abstract class AbstractPeriodCriteria implements Criteria {

    static type = CriteriaType.PERIOD;
    componentClass = AttJobFilterPeriodCriteriaComponent;
    type: CriteriaType;

    abstract emptyStringRepresentation;
    abstract stringRepresentation;
    abstract value: {from: Date, to: Date};

}
