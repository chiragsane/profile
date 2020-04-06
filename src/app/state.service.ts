import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private viewState = new BehaviorSubject<string>('main');
  viewStateObservable = this.viewState.asObservable();
  getViewState = () => this.viewState.value;
  setViewState = (newState: string) => this.viewState.next(newState);
}
