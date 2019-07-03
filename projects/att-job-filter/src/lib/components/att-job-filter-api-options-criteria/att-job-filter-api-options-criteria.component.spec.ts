import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttJobFilterApiOptionsCriteriaComponent } from './att-job-filter-api-options-criteria.component';

describe('AttJobFilterApiOptionsCriteriaComponent', () => {
  let component: AttJobFilterApiOptionsCriteriaComponent;
  let fixture: ComponentFixture<AttJobFilterApiOptionsCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttJobFilterApiOptionsCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttJobFilterApiOptionsCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
