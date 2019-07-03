import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JOB_LIST } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobList = JOB_LIST;

  constructor() { }

  findBasedOnName(name): Observable<Array<string>> {
    return of(this.jobList.filter(jobName => jobName.toLowerCase().indexOf(name.toLowerCase()) !== -1));

  }


}
