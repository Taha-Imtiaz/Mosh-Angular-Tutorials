import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { timer } from 'rxjs'
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  isChecked = true;
  colors = [
    { id: 1, name: "Red" },
    { id: 2, name: "Green" },
    { id: 3, name: "Blue" },

  ]
  minDate = new Date(2021, 1, 1);
  maxDate = new Date(2021, 7, 1);

  categories = [
    { name: 'Beginner' },
    { name: 'Intermediate' },
    { name: 'Advanced' },

  ]
  selectCategory(category) {
    this.categories.filter((c) => c !== category).forEach((c) => c['selected'] = false)

    category.selected = !category.selected

  }

  onChange($event) {
    console.log($event)
  }
  color = 2

  // openDialog() {
  //   this.dialog.open(EditCourseComponent, {
  //     // passing data to dialog
  //     data: { courseId: 1 }
  //   })
  //     .afterClosed()
  //     .subscribe((result) => console.log(result))
  // }

  // progress = 0
  // timer 
  isLoading = false

  // constructor(private dialog: MatDialog) {
    // this.isLoading = true

    // this.getCourses().subscribe(x => this.isLoading = false)
    // this.timer =  setInterval(() => {
    //     this.progress++;

    //     if(this.progress === 100) {
    //       clearInterval(this.timer)
    //     }
    //   }, 20)


  }
  //   getCourses() {
  //     // 2 sec timer delay
  // return timer(2000)
  //   }
// }
