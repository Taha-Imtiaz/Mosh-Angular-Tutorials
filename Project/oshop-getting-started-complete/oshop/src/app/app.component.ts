import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private userService: UserService, private auth: AuthService, private router: Router) {
    auth.user$.subscribe((user) => {
      if (user) {
        // call saveUser to save user in database when useer logs in
        userService.save(user)

        //  get returnUrl from localStorage
        let returnUrl = localStorage.getItem('returnUrl')
        if(returnUrl) {
          localStorage.removeItem('returnUrl')
          // navigate the user
        this.router.navigateByUrl(returnUrl)

        }

      }

    })
  }
}
