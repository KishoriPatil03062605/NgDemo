import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dynamic-route',
  templateUrl: './dynamic-route.component.html',
  styleUrls: ['./dynamic-route.component.css']
})
export class DynamicRouteComponent implements OnInit, OnDestroy {

  route: string;
  fragment: string;
  resolveValue;
  paramSubscription: Subscription;

  constructor(private router: Router, private aRoute: ActivatedRoute) {
    this.route = this.router.url;
    this.fragment = this.aRoute.snapshot.paramMap.get('route');
    // this.aRoute.snapshot.params('route'); // another way to get fragments
    this.resolveValue = this.aRoute.data;
  }

  ngOnInit() {
    // this is to get the new values from the param when the component is already
    // inialized or loaded,so snapshot will not have the new params, we use
    // subscribe on params
    // this.router.events.subscribe(
    //   (event) => {
    //   }
    // );
    this.paramSubscription = this.aRoute.params.subscribe(
      (params: Params) => {
        this.fragment = params['route'];
      }
    );
  }

  ngOnDestroy() {
    // this is not needed, as angular unsubscribes the route subscription
    this.paramSubscription.unsubscribe();
  }
}
