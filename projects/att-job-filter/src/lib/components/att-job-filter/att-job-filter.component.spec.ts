import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttJobFilterComponent } from './att-job-filter.component';

describe('AttJobFilterComponent', () => {
  let component: AttJobFilterComponent;
  let fixture: ComponentFixture<AttJobFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttJobFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttJobFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
