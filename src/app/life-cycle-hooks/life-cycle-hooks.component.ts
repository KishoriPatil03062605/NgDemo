import { LifeCyclehooksService } from './../services/life-cyclehooks.service';
import {
  Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit, OnChanges, OnDestroy, DoCheck,
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  onChangeValue: number;
  constructor(public lifeCylcehooksService: LifeCyclehooksService) {
    this.lifeCylcehooksService.lCHooks.push('parent constructor');
   }
  ngOnChanges() {
    this.lifeCylcehooksService.lCHooks.push('parent ngOnChanges');
  }
  ngOnInit() {
    this.lifeCylcehooksService.lCHooks.push('parent ngOnInit');
  }

  ngOnDestroy() {
    this.lifeCylcehooksService.lCHooks.push('parent ngOnDestroy');
  }
  ngDoCheck() {
    this.lifeCylcehooksService.lCHooks.push('parent ngDoCheck');
  }
  ngAfterContentChecked() {
    this.lifeCylcehooksService.lCHooks.push('parent ngAfterContentChecked');
  }
  ngAfterContentInit() {
    this.lifeCylcehooksService.lCHooks.push('parent ngAfterContentInit');
  }
  ngAfterViewChecked() {
    this.lifeCylcehooksService.lCHooks.push('parent ngAfterViewChecked');
  }
  ngAfterViewInit() {
    this.lifeCylcehooksService.lCHooks.push('parent ngAfterViewInit');
  }


  isParent(lchook) {
    return !lchook.includes('child');
  }
}
