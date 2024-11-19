import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective implements OnChanges {
  @Input() appSelected: boolean;
  @HostBinding('style.backgroundColor') private backgroundColor: string;
  @HostBinding('style.fontWeight') private fontWeight: string;
  @HostBinding('style.color') private color: string;

  ngOnChanges() {
    if (this.appSelected) {
      this.backgroundColor = '#546DE5';
      this.fontWeight = 'bold';
      this.color = 'white';
    }
    else {
      this.backgroundColor = 'white';
      this.fontWeight = 'normal';
      this.color = '#444';
    }
  }

  constructor() {}
}
