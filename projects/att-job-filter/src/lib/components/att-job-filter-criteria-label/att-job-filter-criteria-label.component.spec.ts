import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttJobFilterCriteriaLabelComponent } from './att-job-filter-criteria-label.component';

describe('AttJobFilterCriteriaLabelComponent', () => {
  let component: AttJobFilterCriteriaLabelComponent;
  let fixture: ComponentFixture<AttJobFilterCriteriaLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttJobFilterCriteriaLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttJobFilterCriteriaLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
