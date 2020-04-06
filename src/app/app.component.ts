import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading = true;
  isMainView = false;
  isFullView = false;
  isMenuView = false;
  latestState: string;
  constructor(
    private router: Router,
    private state: StateService,
  ) {
  }
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/home']);
      setTimeout(() => {
        this.state.viewStateObservable.subscribe(view => {
          switch (view) {
          case 'main':
            this.isMainView = true;
            this.isFullView = false;
            this.isMenuView = false;
            break;
          case 'full':
            this.isMainView = false;
            this.isFullView = true;
            this.isMenuView = false;
            break;
          case 'menu':
            this.isMainView = false;
            this.isFullView = false;
            this.isMenuView = true;
            break;
          case '':
            break;
          default:
            console.error(`No Such view: ${view}`);
          }
        });
      }, 0);
    }, 2400);
  }
  setView = (newState: string) => this.state.setViewState(newState);
  toggleMenu(isMenuView: boolean) {
    if (isMenuView) {
      this.latestState = this.state.getViewState();
      this.setView('menu');
    } else {
      this.setView(this.latestState);
    }
  }
}
