import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttJobFilterPeriodCriteriaComponent } from './att-job-filter-period-criteria.component';

describe('AttJobFilterPeriodCriteriaComponent', () => {
  let component: AttJobFilterPeriodCriteriaComponent;
  let fixture: ComponentFixture<AttJobFilterPeriodCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttJobFilterPeriodCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttJobFilterPeriodCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
