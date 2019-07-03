import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttJobFilterDatePickerComponent } from './att-job-filter-date-picker.component';

describe('AttJobFilterDatePickerComponent', () => {
  let component: AttJobFilterDatePickerComponent;
  let fixture: ComponentFixture<AttJobFilterDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttJobFilterDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttJobFilterDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
