import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
@Directive({
  selector: '[appWheel]'
})
export class WheelDirective {
  @Output() wheelDelta = new EventEmitter();
  @HostListener('mousewheel', ['$event']) onMousewheel(event: any): any {
    if (event.wheelDelta > 0) {
      this.wheelDelta.emit('previous');
    }
    if (event.wheelDelta < 0) {
      this.wheelDelta.emit('next');
    }
  }
}
