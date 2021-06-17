import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[]

  constructor(private service: PostService) {

  }

  // ngOnInit() works in the same way like componentDidMount
  ngOnInit() {
    // get All Posts from the service
    this.service.getAll()
      .subscribe((posts) => {
        // console.log(response);
        // typecast the response to as Any
        this.posts = posts

      }
        // , (error) => {
        //   alert("An unexpected error occured")
        //   console.log(error);

        // }
      )
  }

  // create Post
  createPost(input: HTMLInputElement) {
    // create post object
    let post = { title: input.value }
    input.value = ''
    // send post (to create data) on the server
    // subscribe is used to notify when result is ready
    this.service.create(post)
      .subscribe((newPost) => {
        // console.log((response as any).id );
        post['id'] = newPost.id

        // post['id'] = (response as any).id
        // add at the bedinning of the list
        this.posts.splice(0, 0, post)

      }, (error: AppError) => {
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError)
        }
        else {
          // throw global error
          throw error

          //      alert("An unexpected error occured")
          // console.log(error);
        }


      })
  }

  // update post
  updatePost(post) {
    this.service.update(post)
      .subscribe((updatedPost) => console.log(updatedPost)
        // , (error) => {
        //   alert("An unexpected error occured")
        //   console.log(error);

        // }
      );

  }

  // delete post
  deletePost(post) {
    // send invalid id instead of post.id
    this.service.delete(345)
      .subscribe(() => {
        // console.log(response);

        // find the index of post in the array
        let index = this.posts.indexOf(post)
        this.posts.splice(index, 1)
      }, (error: AppError) => {
        console.log(error);
        // if error is an instance of notfound error
        if (error instanceof NotFoundError)
          alert(`This post has already been deleted`)
        else {
          // throw global error
          throw error
        }


      })
  }

}
