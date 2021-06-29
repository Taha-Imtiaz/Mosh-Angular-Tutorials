import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import "rxjs/add/operator/map"

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
canActivate(route, state: RouterStateSnapshot) {

  // get auth state of the current user
  // get user observalble and subscribe to it
 return this.auth.user$.map((user) => {

    if(user) {
      console.log(user);
      return true
      
    }
    else {
      // navigate to login page
      this.router.navigate(['/login'], {
        // get the url of the page where they come from(to login page for auth)
        queryParams:{returnUrl: state.url}
      })
      return false
    }
  })

}
}
