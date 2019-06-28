import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttJobFilterOptionPickerComponent } from './att-job-filter-option-picker.component';

describe('AttJobFilterOptionPickerComponent', () => {
  let component: AttJobFilterOptionPickerComponent;
  let fixture: ComponentFixture<AttJobFilterOptionPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttJobFilterOptionPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttJobFilterOptionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
