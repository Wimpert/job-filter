import { AttJobFilterApiOptionsCriteriaComponent } from '../../components/att-job-filter-api-options-criteria/att-job-filter-api-options-criteria.component';
import { Criteria } from './criteria.model';
import { CriteriaType } from './criteria.type.model';

export abstract class AbstractApiListCriteria extends Criteria {

    static type = CriteriaType.API_LIST;
    static emptyStringRepresentation: string;
    componentClass = AttJobFilterApiOptionsCriteriaComponent;
    type: CriteriaType;


    abstract url: string;
    abstract stringRepresentation;
    abstract value;


}
