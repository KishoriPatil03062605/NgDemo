import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class PubSubService {

  public observable: Observable<string>;
  public observer: Observer<string>;

  constructor() {
    this.observable = new Observable((observer) => {
    this.observer = observer;
  });
   }

   allowMultiCast() {
    this.observable = this.observable.share();
   }
}
