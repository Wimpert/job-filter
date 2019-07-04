import { Component, ComponentFactoryResolver, HostListener, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, combineLatest, merge, Observable, of, Subject, Subscription } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { POSSIBLE_CRITERIA } from '../../shared/constants/constants';
import { AbstactCriteriaComponent } from '../../shared/models/abstact.criteria.component';
import { Criteria } from '../../shared/models/criteria.model';
import { JobCriteria } from '../../shared/models/job.criteria.model';
import { JobService } from '../../shared/services/job/job.service';

@Component({
  selector: 'att-job-filter',
  templateUrl: './att-job-filter.component.html',
  styleUrls: ['./att-job-filter.component.scss']
})
export class AttJobFilterComponent<T> implements OnInit, OnDestroy {

  @ViewChild('criteriaComponentContainer', { read: ViewContainerRef }) criteriaComponentContainer: ViewContainerRef;

  @Input() functionality: string;

  criteria: Array<typeof Criteria> = POSSIBLE_CRITERIA;

  searchBarHasFocus$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  destroy$: Subject<void> = new Subject<void>();
  nameSearchValue$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
  isInNameSearchModus = false;
  jobsFoundBasedOnName$: Observable<Array<string>>;

  currentCriteria$: Subject<Criteria> =  new Subject();
  private _currentCriteria: Criteria;

  set currentCriteria(criteria: Criteria) {
    this._currentCriteria = criteria;
    this.currentCriteria$.next(criteria);
  }

  get currentCriteria(): Criteria {
    return this._currentCriteria;
  }

  placeholder$: Observable<string> = of('');

  appliedCriterias: Array<Criteria> = new Array<Criteria>();
  criteriaComponentSubscriptions: Array<Subscription> = new Array<Subscription>();


  optionPickerValues$: Observable<Array<{displayValue: string, data: any}>> = combineLatest(this.searchBarHasFocus$, this.nameSearchValue$).pipe(
    tap(_ => this.isInNameSearchModus = false),
    switchMap(([hasFocus, nameSearchValue]: [boolean, string]) => {
      if (!hasFocus) {
        return of(undefined);
      } else {
        if (!nameSearchValue) {
          return of(this.criteria.map(criteriumType => ({displayValue : criteriumType.emptyStringRepresentation , data: criteriumType})));
        } else {
          this.isInNameSearchModus = true;
          return this.jobService.findBasedOnName(nameSearchValue).pipe(
            map(names => names.map(name => ({displayValue: name, data: name}))));
        }
      }
    }),
  );

  showDropdown$: Observable<boolean> = merge(this.optionPickerValues$.pipe(
    map(value => !!value)
  ));

  @HostListener('document:keydown', ['$event'])
  keyDownHandler(keydownEvent) {
    if (keydownEvent.key === 'Escape') {
      if (this.currentCriteria) {
        this.currentCriteria = undefined;
      }
    }
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private readonly jobService: JobService) {}

  ngOnInit(): void {
    this.currentCriteria$.pipe(
      takeUntil(this.destroy$),
      tap( criteria => this.insertCriteriaComponent(criteria))
    ).subscribe();

    this.jobsFoundBasedOnName$ = this.nameSearchValue$.pipe(
      switchMap(name => this.jobService.findBasedOnName(name))
    );
  }

  handleOptionsClicked(option) {
    if (this.isInNameSearchModus) {
     const jobCriteria = new JobCriteria();
     jobCriteria.value = option.displayValue;
     this.appliedCriterias.push(jobCriteria);
     this.nameSearchValue$.next(undefined);
     this.searchBarHasFocus$.next(false);
    } else {
      this.currentCriteria = option.data;
    }
  }

  insertCriteriaComponent(criteriaType): void {
    this.criteriaComponentContainer.clear();
    this.clearSubscriptions();
    if (criteriaType) {
      const criteria = new criteriaType();
      const componentFactory  = this.componentFactoryResolver.resolveComponentFactory(criteria.componentClass);
      const componentRef = this.criteriaComponentContainer.createComponent(componentFactory);
      const criteriaComponent = componentRef.instance as AbstactCriteriaComponent<any>;
      criteriaComponent.criteria = criteria;
      this.criteriaComponentSubscriptions.push(criteriaComponent.criteriaUpdateFinished.subscribe( criteriaFromComponent => {
         this.appliedCriterias.push(criteriaFromComponent);
         this.currentCriteria = undefined;
        }
       ));
    }
  }


  handleRemoveCriteria(criteria: Criteria) {
    this.appliedCriterias.splice(this.appliedCriterias.indexOf(criteria), 1);
  }

  clearSubscriptions(): void {
    this.criteriaComponentSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnDestroy(): void {
    this.clearSubscriptions();
    this.destroy$.next();
  }

  handleSearchInputValueChanged(value: string) {
    this.nameSearchValue$.next(value);
  }

  handleLabelClicked(criteria: Criteria) {
    criteria.including = !criteria.including;
  }
}
