import { Criteria } from '../models/criteria.model';
import { DepartmentCriteria } from '../models/department.criteria.model';
import { FunctionCriteria } from '../models/function.criteria.model';
import { InserviceCriteria } from '../models/inservice.criteria.model';
import { StatusCriteria } from '../models/status.criteria.model';
import { UnitCriteria } from '../models/unit.criteria.model';
import { ValidOnCriteria } from '../models/validon.criteria.model.1';


export const POSSIBLE_CRITERIA: Array<typeof Criteria> = [  UnitCriteria,  InserviceCriteria,  FunctionCriteria,  StatusCriteria,  ValidOnCriteria, DepartmentCriteria];

export const JOB_LIST = ['Chris Frisch ', 'Darlena Fortson ', 'Jenee Claflin ', 'Jamar Mcmunn ', 'Tamiko Flory ', 'Lawanda Aldrich ', 'Darcy Brunn ', 'Marvis Kinnear ', 'Geri Petitt ', 'Yael Galasso ', 'Jacob Hayek ', 'Christine Stander ', 'Augustus Mcnew ', 'Ciera Benes ', 'Janella Murph ', 'Madelaine Tuck ', 'Renda Hayden ', 'Classie Kibler ', 'Celestina Vassel ', 'Ashley Daddario ', 'Iesha Propp ', 'Millard Meeker ', 'Mui Plumber ', 'Allyson Faw ', 'Lala Kavanaugh ', 'Genevive Almendarez ', 'Ray Loo ', 'Camelia Cleland ', 'Andrew Climer ', 'Farah Earlywine ', 'Coretta Bassett ', 'Allan Lebron ', 'Brock Martine ', 'Yoshiko Poat ', 'Whitney Hargrave ', 'Wilber Pietrzak ', 'Kristofer Dygert ', 'Charley Kelsey ', 'Lauren Piersall ', 'Delpha Lewellen ', 'Carolyne Kanter ', 'Bryant Orsini ', 'Annett Brunetti ', 'Ezequiel Banes ', 'Barbie Surette ', 'Cheree Sidle ', 'Keshia Walch ', 'Zetta Wind ', 'Retha Cammack ', 'Sun Nestor'];


export const DEPARTMENT_LIST = ['Pampers','AT&T', "Siemens AG", "Vodafone", "Beko", "Xerox", "Global Gillette", "Credit Suisse", "Mercedes-Benz", "Caterpillar Inc.", "Morgan Stanley", "Allianz", "Oracle Corporation", "Kia Motors", "The Walt Disney Company", "United Parcel Service",'Yahoo!','Verizon Communications', "Chase",'Ralph Lauren Corporation', "General Electric", "Nintendo", "Adobe Systems",'Shell Oil Company','3M','Harley-Davidson Motor Company','Tesco Corporation','MasterCard', "Facebook, Inc.",'Mitsubishi'];
