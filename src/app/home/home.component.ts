import { Component, OnInit } from '@angular/core';
import { StateService } from './../state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMainView = false;
  areComponentsVisible = false;
  constructor(private state: StateService) {}
  ngOnInit() {
    this.state.viewStateObservable.subscribe(view => {
      switch (view) {
        case 'main':
          this.setComponentsVisiblity(true);
          break;
        case 'full':
          this.setComponentsVisiblity(false);
          break;
        case 'menu':
          this.setComponentsVisiblity(false);
          break;
        case '':
          break;
        default:
          console.error(`No Such view: ${view}`);
      }
    });
  }
  setComponentsVisiblity(visiblity: boolean) {
    setTimeout(() => {
      this.isMainView = visiblity;
    }, 200);
    setTimeout(() => {
      this.areComponentsVisible = visiblity;
    }, visiblity ? 20 : 780);
  }
}
