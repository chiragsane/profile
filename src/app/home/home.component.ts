import { Component, OnInit } from '@angular/core';
import { StateService } from './../state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMainView = false;
  constructor(private state: StateService) {}
  ngOnInit() {
    setTimeout(() => {
      this.state.viewStateObservable.subscribe(view => {
        switch (view) {
        case 'main':
          this.isMainView = true;
          break;
        case 'full':
          this.isMainView = false;
          break;
        case 'menu':
          this.isMainView = false;
          break;
        case '':
          break;
        default:
          console.error(`No Such view: ${view}`);
        }
      });
    }, 0);
  }
}
