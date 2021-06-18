import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    // inject router service
    private router: Router,
    // inject authService
    private authService: AuthService) { }
  
    // make route guard for protecting routes
    canActivate(route, state: RouterStateSnapshot) {
    // checks if the userr is logged in or not
    if(this.authService.isLoggedIn()) return true
    else {
      console.log(state.url);
      this.router.navigate(['/login'],{queryParams:{
     
        
        // access url user wants to access (send query parameter to login page)
        returnUrl: state.url
      }})
      return false
    }
  }
}
