import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * @classdesc This guard will check current user's role. if is 'admin', will return true, vice versa.
 * getting user's role from localStorage for now as requested
 */
export class AdminGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const userRole = localStorage.getItem('userRole');
    if (userRole === 'admin') {
      return true;
    } else {
      // Redirect to home page
      return this.router.parseUrl('/home');
    }
  }
}
