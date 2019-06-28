import { Criteria } from '../models/criteria.model';
import { InserviceCriteria } from '../models/inservice.criteria.model';
import { UnitCriteria } from '../models/unit.criteria.model';

export const POSSIBLE_CRITERIA: Array<Criteria> = [  new UnitCriteria(), new InserviceCriteria()];
