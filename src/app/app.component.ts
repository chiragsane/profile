import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMainView = false;
  isFullView = false;
  isMenuView = false;
  isLoading = true;
  constructor(private router: Router) {}
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/home']);
      setTimeout(() => {
        this.isMainView = true;
      }, 0);
    }, 2400);
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
