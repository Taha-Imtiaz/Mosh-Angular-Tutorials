import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

// the admin is accessible to users who are admin{admin:true}
@Injectable()
export class AdminAuthGuard implements CanActivate{

  constructor( 
    // inject router service
    private router: Router,

    // inject authService
    private authService: AuthService) { }


  // implement can activate
  canActivate() {
    let user = this.authService.currentUser
    // if admin then return true
   if (user && user.admin) {
     return true
   }
   else {
// if not admin redirect to no-access
     this.router.navigate(['/no-access'])
     return false
   }
  }
}
