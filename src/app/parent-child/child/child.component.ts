import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PubSubService } from '../../services/pub-sub.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('childText1')
  childText1: string;

  @Input('childObject')
  childObject: any;

  childText2: string;

  childText3: string;

  @Input('childText4')
  childText4: string;

  childText5: string;

  public subject: Subject<string> = new Subject();

  @Output('eventEmitter')
  eventEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private pubSubService: PubSubService) {

  }

  ngOnInit() {
    this.pubSubService.observable.subscribe((childText2) => {
      this.childText2 = childText2;
    });
    this.pubSubService.observable.subscribe((childText2) => {
      this.childText5 = childText2;
    });
  }

  publishNextVal(childText4) {
    this.subject.next(childText4);
  }

  emitEvent(childText3) {
    this.eventEmitter.emit(childText3);
  }

  requestMultipleSubscription() {
    this.pubSubService.allowMultiCast();
    this.ngOnInit();
  }
}
