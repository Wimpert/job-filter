import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttJobFilterStringCriteriaComponent } from './att-job-filter-string-criteria.component';

describe('AttJobFilterStringCriteriaComponent', () => {
  let component: AttJobFilterStringCriteriaComponent;
  let fixture: ComponentFixture<AttJobFilterStringCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttJobFilterStringCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttJobFilterStringCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
