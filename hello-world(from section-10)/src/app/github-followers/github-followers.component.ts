import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { switchMap } from 'rxjs/operators'

// import { combineLatest } from 'rxjs';
@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {

    // combine 2 observables
  let combinedObservable =   combineLatest([this.route.paramMap, this.route.queryParamMap])

  // apply mapOperator to combined observale
    combinedObservable.pipe(switchMap((combinedArr) => {
      let id =  combinedArr[0].get('id')
      let page = combinedArr[1].get('page')
     //  this.service.getAll({id: id, page:page})
   
     // use service to get data from the server
    return this.service.getAll()
    //  .subscribe(followers => this.followers = followers);
    }))

  // subscribe to combinedObservable
  .subscribe((followers) => this.followers = followers)
  
  // get required parameters
    // this.route.paramMap.subscribe((params) => {

    // })
  //  let id = this.route.snapshot.paramMap.get('id')

  // getting (recieving) query parameters
  // this.route.queryParamMap.subscribe((params) => {

  // })
  // let page = this.route.snapshot.queryParamMap.get('page')

  
  
  }
}
