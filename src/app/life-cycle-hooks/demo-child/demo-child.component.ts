import { LifeCyclehooksService } from './../../services/life-cyclehooks.service';
import {
  Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Input
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
  ngOnChanges() {
    this.lifeCylcehooksService.lCHooks.push('child ngOnChanges');
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
