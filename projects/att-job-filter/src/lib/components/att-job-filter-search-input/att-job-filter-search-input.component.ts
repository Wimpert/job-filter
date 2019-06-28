import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'att-job-filter-search-input',
  templateUrl: './att-job-filter-search-input.component.html',
  styleUrls: ['./att-job-filter-search-input.component.scss']
})
export class AttJobFilterSearchInputComponent implements OnInit {

  @Input() placeholder = '';
  @Input() showDropdown: boolean;


  constructor() { }

  ngOnInit() {
  }

}
