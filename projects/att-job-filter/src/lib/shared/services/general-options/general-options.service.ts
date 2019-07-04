import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DEPARTMENT_LIST } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class GeneralOptionsService {

  constructor() { }

  getOptions(url: string): Observable<Array<any>> {
    return of(DEPARTMENT_LIST);
  }

}
