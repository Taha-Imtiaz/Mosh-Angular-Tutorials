import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  post = {
    title: "Title",
    isFavorite: true
  }
  // courses = [1, 2]
  viewMode = "map"
  courses
  canSave = true

  task = {
    title: "Review Applications",
    assignee :{
      name:"John Smith"
    }
  }
  onAdd() {
    this.courses.push({ id: 4, name: "course4" })
  }
  onRemove(course) {
    // find the index of course
    let index = this.courses.indexOf(course)
    // remove the course
    this.courses.splice(index, 1)
  }
  onChange(course) {
    course.name = "Updated course"
  }

  // loadCourses
  loadCourses() {
    this.courses = [
      { id: 1, name: "course1" },
      { id: 2, name: "course2" },
      { id: 3, name: "course3" },

    ]
  }

  // track courses by id
  trackCourse(index, course) {
    return course ? course.id : undefined
  }

  // subscriber of change event
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite Changed: ", eventArgs);

  }
}
