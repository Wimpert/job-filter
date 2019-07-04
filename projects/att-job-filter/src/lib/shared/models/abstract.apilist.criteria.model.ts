import { AttJobFilterApiOptionsCriteriaComponent } from '../../components/att-job-filter-api-options-criteria/att-job-filter-api-options-criteria.component';
import { Criteria } from './criteria.model';
import { CriteriaType } from './criteria.type.model';

export abstract class AbstractApiListCriteria extends Criteria {

    static type = CriteriaType.API_LIST;
    static emptyStringRepresentation: string;
    static _mapFunction: (values: Array<any>) => (Array<{displayValue: string, data: any}>);

    componentClass = AttJobFilterApiOptionsCriteriaComponent;
    type: CriteriaType;


    abstract url: string;
    abstract stringRepresentation;
    abstract value;

    abstract get mapFunction()


}
