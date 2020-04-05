import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMainView = false;
  isFullView = false;
  isMenuView = false;
  ngOnInit() {
    setTimeout(() => {
      this.isMainView = true;
    }, 0);
  }
  toggleMenu(isMenuView: boolean) {
    this.isMenuView = isMenuView;
  }
  previousView() {
    this.isMainView = true;
    this.isFullView = false;
  }
  nextView() {
    this.isMainView = false;
    this.isFullView = true;
  }
}
