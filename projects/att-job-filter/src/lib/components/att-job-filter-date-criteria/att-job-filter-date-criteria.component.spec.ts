import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttJobFilterDateCriteriaComponent } from './att-job-filter-date-criteria.component';

describe('AttJobFilterDateCriteriaComponent', () => {
  let component: AttJobFilterDateCriteriaComponent;
  let fixture: ComponentFixture<AttJobFilterDateCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttJobFilterDateCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttJobFilterDateCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
