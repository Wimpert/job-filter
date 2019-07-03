import { Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'att-job-filter-search-input',
  templateUrl: './att-job-filter-search-input.component.html',
  styleUrls: ['./att-job-filter-search-input.component.scss']
})
export class AttJobFilterSearchInputComponent implements OnDestroy {

  @Input() placeholder = '';
  @Input() showDropdown: boolean;
  @Output() valueChanged = new EventEmitter<string>();
  @Output() hasFocus = new EventEmitter<boolean>();

  mouseIsOver = false;

  @ViewChild('searchInput') searchInput: ElementRef;

  @HostListener('mouseenter') onMouseEnter() {
   this.mouseIsOver = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.mouseIsOver = false;
  }

  @HostListener('document:keydown', ['$event'])
  keyDownHandler(keydownEvent) {
    if (keydownEvent.key === 'Escape') {
       this.searchInput.nativeElement.blur();
       this.hasFocus.emit(false);
    }
  }


  handleValueChanged(event): void {
    if (event && event.target) {
      this.valueChanged.emit(event.target.value);
    }
  }

  handleInputBlur(): void {
    if (!this.mouseIsOver) {
      this.hasFocus.emit(false);
    }
  }

  ngOnDestroy() {
    this.hasFocus.emit(false);
  }


}
