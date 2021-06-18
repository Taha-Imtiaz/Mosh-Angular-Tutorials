import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean; 

  constructor(
    private router: Router, 

    // access route parameters
    private route: ActivatedRoute,
    private authService: AuthService) { }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result) {
        // checks if returnUrl exists in the querParams
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
        // if returnUrl exists navigate to returnUrl otherwise navigate to "/"
          this.router.navigate([returnUrl || '/']);
        }
        else  
          this.invalidLogin = true; 
      });
  }
}
