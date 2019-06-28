import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttJobFilterSearchInputComponent } from './att-job-filter-search-input.component';

describe('AttJobFilterSearchInputComponent', () => {
  let component: AttJobFilterSearchInputComponent;
  let fixture: ComponentFixture<AttJobFilterSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttJobFilterSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttJobFilterSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
