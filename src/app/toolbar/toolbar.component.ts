import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  name = 'ChiragSane';
  isMenuActive = false;
  links = [
    'Home',
    'About Me',
    'Work Experience'
  ]
  @Output() toggle = new EventEmitter();
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
    iconRegistry.addSvgIcon('cancel', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cancel.svg'));
  }
  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
    this.toggle.emit(this.isMenuActive);
  }
}
