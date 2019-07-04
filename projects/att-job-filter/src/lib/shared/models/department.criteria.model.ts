import { AbstractApiListCriteria } from './abstract.apilist.criteria.model';

export class DepartmentCriteria extends AbstractApiListCriteria {

    get stringRepresentation(): string {
        return this.value ? `Ìs part of department: ${this.value}` : '';
    }

    static readonly emptyStringRepresentation = 'Select a department';

    value: string;
    url: string;

    static _mapFunction = (values: Array<string>) => (values.map(value => ({displayValue: value, data: value})));

    get mapFunction() {
        return DepartmentCriteria._mapFunction;
    }

}
