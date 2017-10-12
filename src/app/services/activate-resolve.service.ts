import { Injectable } from '@angular/core';
import { CanActivate, Resolve, CanActivateChild,
   ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ActivateResolveService implements CanActivate, Resolve<boolean>, CanActivateChild {
   constructor(private router: Router) { }
   canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (route.paramMap.get('childRoute').includes('child')) {
      return true;
    }else {
      window.alert('URL does not contain "child"');
      return false;
    }
  }
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      if (route.paramMap.get('route').includes('dynamic')) {
        return true;
      }else {
        window.alert('URL does not contain "dynamic"');
        return false;
      }
    }
    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
      window.alert('Route Resolved');
      return true;
    }
  }
