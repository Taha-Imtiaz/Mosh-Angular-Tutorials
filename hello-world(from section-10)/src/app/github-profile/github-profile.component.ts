import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  // inject activated route (service defined in angular/router) class in the constructor to access dynamic route parameter
  // router is used for programmatic navigation
  constructor(private route: ActivatedRoute, private router: Router) { }

  //github profile component is an observer to this observable if there is a change in route parameters github profile is notified
  ngOnInit() {
    console.log("Github profile onInit");


    // get the route parameters (paramMap give access to all parameters of route)
    // this.route.paramMap
    // .subscribe((params) => {
    //   // params.keys //returns all the keys
    //   // params.get //params.get the value of given route parameter 
    //   // params.getAll //params.getAll get the values of all route parameters 
    //   // params.has // to see the parameter by given name 

    //   // + convert the string to number
    //  let id = +params.get('id');
    //  console.log(id);


    // })

    // Don't allow user to stay on the same page (useSnapShot)
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id);

    // submit method on clicking submit Button

  }
  submit() {
    this.router.navigate(['/followers'],
      //  query parameters
      {
        queryParams: { page: 1, order: 'newest' }
      })
  }
}
