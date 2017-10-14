import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { PubSubService } from '../services/pub-sub.service';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  parentText1: string;

  parentText2: string;

  parentText3: string;

  parentText4: string;

  parentText5: string;

  parentObject: any = {'parentKey': 'parentVal'};

  @ViewChild('child')
  child: ChildComponent;

  constructor(private pubSubService: PubSubService) {
   }

  ngOnInit() {
    this.child.subject.subscribe((text) => {
      this.parentText4 = text;
    });
    this.child.subject.subscribe((text) => {
      this.parentText5 = text;
    });
  }
  publishNextVal(parentNext2) {
    this.pubSubService.observer.next(parentNext2);
  }

  getFromChild(textEvent) {
    this.parentText3 = textEvent;
  }

}
