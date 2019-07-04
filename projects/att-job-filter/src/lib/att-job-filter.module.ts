import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AttJobFilterApiOptionsCriteriaComponent } from './components/att-job-filter-api-options-criteria/att-job-filter-api-options-criteria.component';
import { AttJobFilterCriteriaLabelComponent } from './components/att-job-filter-criteria-label/att-job-filter-criteria-label.component';
import { AttJobFilterDateCriteriaComponent } from './components/att-job-filter-date-criteria/att-job-filter-date-criteria.component';
import { AttJobFilterDatePickerComponent } from './components/att-job-filter-date-picker/att-job-filter-date-picker.component';
import { AttJobFilterDropdownContainerComponent } from './components/att-job-filter-dropdown-container/att-job-filter-dropdown-container.component';
import { AttJobFilterFilterableOptionsPickerComponent } from './components/att-job-filter-filterable-options-picker/att-job-filter-filterable-options-picker.component';
import { AttJobFilterOptionPickerComponent } from './components/att-job-filter-option-picker/att-job-filter-option-picker.component';
import { AttJobFilterOptionsCriteriaComponent } from './components/att-job-filter-options-criteria/att-job-filter-options-criteria.component';
import { AttJobFilterPeriodCriteriaComponent } from './components/att-job-filter-period-criteria/att-job-filter-period-criteria.component';
import { AttJobFilterSearchInputComponent } from './components/att-job-filter-search-input/att-job-filter-search-input.component';
import { AttJobFilterStringCriteriaComponent } from './components/att-job-filter-string-criteria/att-job-filter-string-criteria.component';
import { AttJobFilterComponent } from './components/att-job-filter/att-job-filter.component';
import { FilterOptionsPipe } from './shared/pipes/filter-options.pipe';

@NgModule({
  declarations: [AttJobFilterComponent, AttJobFilterSearchInputComponent,
                 AttJobFilterDropdownContainerComponent, AttJobFilterOptionPickerComponent,
                 AttJobFilterOptionsCriteriaComponent, AttJobFilterPeriodCriteriaComponent,
                 AttJobFilterDatePickerComponent, AttJobFilterCriteriaLabelComponent,
                 AttJobFilterApiOptionsCriteriaComponent, AttJobFilterStringCriteriaComponent, AttJobFilterDateCriteriaComponent, AttJobFilterFilterableOptionsPickerComponent, FilterOptionsPipe],
  imports: [
    CommonModule
  ],
  entryComponents: [AttJobFilterOptionsCriteriaComponent, AttJobFilterPeriodCriteriaComponent, AttJobFilterDateCriteriaComponent,  AttJobFilterApiOptionsCriteriaComponent],
  exports: [AttJobFilterComponent]
})
export class AttJobFilterModule { }
