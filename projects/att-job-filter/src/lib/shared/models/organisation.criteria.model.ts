import { AbstractApiListCriteria } from './abstract.apilist.criteria.model';

export class OrganisationCriteria extends AbstractApiListCriteria {

    static readonly emptyStringRepresentation = 'Select an organisation:';

    get stringRepresentation(): string {
        return this.value ? `Ìs part of organisation: ${this.value}` : '';
    }
    value: string;


    url = 'http://call.me/api';
}
