import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttJobFilterOptionsCriteriaComponent } from './att-job-filter-options-criteria.component';

describe('AttJobFilterOptionsCriteriaComponent', () => {
  let component: AttJobFilterOptionsCriteriaComponent;
  let fixture: ComponentFixture<AttJobFilterOptionsCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttJobFilterOptionsCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttJobFilterOptionsCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
