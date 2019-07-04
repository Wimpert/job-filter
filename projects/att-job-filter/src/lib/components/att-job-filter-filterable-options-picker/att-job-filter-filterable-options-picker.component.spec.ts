import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttJobFilterFilterableOptionsPickerComponent } from './att-job-filter-filterable-options-picker.component';

describe('AttJobFilterFilterableOptionsPickerComponent', () => {
  let component: AttJobFilterFilterableOptionsPickerComponent;
  let fixture: ComponentFixture<AttJobFilterFilterableOptionsPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttJobFilterFilterableOptionsPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttJobFilterFilterableOptionsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
