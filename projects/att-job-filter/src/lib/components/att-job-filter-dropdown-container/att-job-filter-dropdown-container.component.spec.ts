import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AttJobFilterDropdownContainerComponent } from './att-job-filter-dropdown-container.component';


describe('AttJobFilterDropDownContainerComponent', () => {
  let component: AttJobFilterDropdownContainerComponent;
  let fixture: ComponentFixture<AttJobFilterDropdownContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttJobFilterDropdownContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttJobFilterDropdownContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
