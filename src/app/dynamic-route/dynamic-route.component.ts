import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dynamic-route',
  templateUrl: './dynamic-route.component.html',
  styleUrls: ['./dynamic-route.component.css']
})
export class DynamicRouteComponent implements OnInit {

  route: string;
  fragment: string;
  resolveValue;

  constructor(private router: Router, private aRoute: ActivatedRoute) {
    this.route = this.router.url;
    this.fragment = this.aRoute.snapshot.paramMap.get('route');
    this.resolveValue = this.aRoute.data;
  }

  ngOnInit() {
  }


}
