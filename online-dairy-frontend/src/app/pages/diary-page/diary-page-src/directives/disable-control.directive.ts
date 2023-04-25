import { Directive, Input, OnChanges, Optional, Self, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '([formControl],[formControlName])[disableControl]'
})
export class DisableControlDirective implements OnChanges {

  @Input() disableControl = false;

  constructor(private ngControl: NgControl) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disableControl'] && this.ngControl.control) {
      const action = this.disableControl ? 'disable' : 'enable';
      this.ngControl.control[action]();
    }
  }

}
