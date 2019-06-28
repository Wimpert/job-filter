import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AttJobFilterDropdownContainerComponent } from './components/att-job-filter-dropdown-container/att-job-filter-dropdown-container.component';
import { AttJobFilterOptionPickerComponent } from './components/att-job-filter-option-picker/att-job-filter-option-picker.component';
import { AttJobFilterOptionsCriteriaComponent } from './components/att-job-filter-options-criteria/att-job-filter-options-criteria.component';
import { AttJobFilterPeriodCriteriaComponent } from './components/att-job-filter-period-criteria/att-job-filter-period-criteria.component';
import { AttJobFilterSearchInputComponent } from './components/att-job-filter-search-input/att-job-filter-search-input.component';
import { AttJobFilterComponent } from './components/att-job-filter/att-job-filter.component';

@NgModule({
  declarations: [AttJobFilterComponent, AttJobFilterSearchInputComponent,
                 AttJobFilterDropdownContainerComponent, AttJobFilterOptionPickerComponent,
                 AttJobFilterOptionsCriteriaComponent, AttJobFilterPeriodCriteriaComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [AttJobFilterOptionsCriteriaComponent, AttJobFilterPeriodCriteriaComponent],
  exports: [AttJobFilterComponent]
})
export class AttJobFilterModule { }
