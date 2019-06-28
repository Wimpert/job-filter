import { Component, ComponentFactoryResolver, HostListener, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';
import { POSSIBLE_CRITERIA } from '../../shared/constants/constants';
import { AbstactCriteriaComponent } from '../../shared/models/abstact.criteria.component';
import { Criteria } from '../../shared/models/criteria.model';

@Component({
  selector: 'att-job-filter',
  templateUrl: `att-job-filter.component.html`,
  styles: []
})
export class AttJobFilterComponent implements OnInit, OnDestroy {

  @ViewChild('criteriaComponentContainer', { read: ViewContainerRef }) criteriaComponentContainer: ViewContainerRef;

  @Input() functionality: string;

  criteria: Array<Criteria> = POSSIBLE_CRITERIA;

  searchBarHasFocus$: Subject<boolean> = new Subject<boolean>();
  destroy$: Subject<void> = new Subject<void>();

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

  showDropdown$: Observable<boolean> = this.searchBarHasFocus$.pipe(
    distinctUntilChanged()
  );

  optionPickerValues$: Observable<Array<{displayValue: string, data: any}>> = this.showDropdown$.pipe(
    map(show => {
      if (show) {
        return this.criteria.map(criterium => ({displayValue : criterium.emptyStringRepresentation , data: criterium}));
      }
      return undefined;
    })
  );

  @HostListener('document:keydown', ['$event'])
  keyDownHandler(keydownEvent) {
    if (keydownEvent.key === 'Escape') {
      this.currentCriteria = undefined;
    }
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.currentCriteria$.pipe(
      takeUntil(this.destroy$),
      tap( criteria => this.insertCriteriaComponent(criteria))
    ).subscribe();
  }

  handleOptionsClicked(option) {
    this.currentCriteria = option.data;
  }

  insertCriteriaComponent(criteria: Criteria): void {
    this.criteriaComponentContainer.clear();
    this.clearSubscriptions();
    if (criteria) {
       const componentFactory  = this.componentFactoryResolver.resolveComponentFactory(criteria.componentClass);
       const componentRef = this.criteriaComponentContainer.createComponent(componentFactory);
       const criteriaComponent = componentRef.instance as AbstactCriteriaComponent<any>;
       criteriaComponent.criteria = criteria;
       this.criteriaComponentSubscriptions.push(criteriaComponent.criteriaUpdateFinished.subscribe( criteria => {
         this.appliedCriterias.push(criteria);
         this.currentCriteria = undefined;
        }
       ));

    }

  }

  clearSubscriptions(): void {
    this.criteriaComponentSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnDestroy(): void {
    this.clearSubscriptions();
    this.destroy$.next();
  }
}
