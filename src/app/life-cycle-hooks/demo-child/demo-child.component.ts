import { LifeCyclehooksService } from './../../services/life-cyclehooks.service';
import {
  Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Input, SimpleChanges
} from '@angular/core';


@Component({
  selector: 'app-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.css']
})
export class DemoChildComponent implements OnInit, OnChanges, OnDestroy, DoCheck,
AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  @Input('onChangeValue')
  onChangeValue: string;

  constructor(private lifeCylcehooksService: LifeCyclehooksService) {
    this.lifeCylcehooksService.lCHooks.push('child constructor');
   }
  // ngOnChanges() {
  //   this.lifeCylcehooksService.lCHooks.push('child ngOnChanges');
  // }
  ngOnChanges(changes: SimpleChanges) {
    this.lifeCylcehooksService.lCHooks.push('child ngOnChanges');
    if (changes.onChangeValue && !changes.onChangeValue.isFirstChange()) {
      // exteranl API call or more preprocessing...
    }
    for (let propName in changes) {
      let change = changes[propName];
      console.dir(change);
      if(change.isFirstChange()) {
        console.log(`first change: ${propName}`);
        //this.lifeCylcehooksService.lCHooks.push('child ngOnChanges : ${propName}');
      } else {
        console.log(`prev: ${change.previousValue}, cur: ${change.currentValue}`);
        //this.lifeCylcehooksService.lCHooks.push('child ngOnChanges : prev: ${change.previousValue}, cur: ${change.currentValue}');
      }
    }
  }
  ngOnInit() {
    this.lifeCylcehooksService.lCHooks.push('child ngOnInit');
  }

  ngOnDestroy() {
    this.lifeCylcehooksService.lCHooks.push('child ngOnDestroy');
  }
  ngDoCheck() {
    this.lifeCylcehooksService.lCHooks.push('child ngDoCheck');
  }
  ngAfterContentChecked() {
    this.lifeCylcehooksService.lCHooks.push('child ngAfterContentChecked');
  }
  ngAfterContentInit() {
    this.lifeCylcehooksService.lCHooks.push('child ngAfterContentInit');
  }
  ngAfterViewChecked() {
    this.lifeCylcehooksService.lCHooks.push('child ngAfterViewChecked');
  }
  ngAfterViewInit() {
    this.lifeCylcehooksService.lCHooks.push('child ngAfterViewInit');
  }
}
