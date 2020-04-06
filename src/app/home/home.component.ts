import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMainView = false;
  ngOnInit() {
    setTimeout(() => {
      this.isMainView = true;
    }, 0);
  }
  toggleMainView(isMainView: boolean) {
    this.isMainView = isMainView;
  }
}
