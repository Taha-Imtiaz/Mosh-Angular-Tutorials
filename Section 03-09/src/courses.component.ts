import { Component } from "@angular/core";
import { CoursesService } from "./app/courses.service";

@Component({
    selector: 'courses',
    template: `
    <h2>{{getTitle()}}</h2>
    <ul>
    <li *ngFor = "let course of courses">
    {{course}}
    </li>
    </ul>
    
    <img [src] = "title" />

    <table>
    <tr>
    <td [attr.colspan] = "colSpan">
    
    </td>
    </tr>
    </table>
    <div (click) = "onDivClicked()">
    <button class = "btn btn-primary" [class.active] = "isActive" (click) = "onSave($event)" [style.backgroundColor] = "isActive ? 'green' : 'white' " >Save</button>
    </div>

    <!--  <input  (keyup)  = "onKeyUp($event)" /> -->
    <!--  <input  (keyup.enter)  = "onKeyUp()" /> -->
    <!--   <input  (keyup.enter)  = "onKeyUp($event)" />-->
   
    <!-- Alternative Syntax -->
    <!--   <input #email (keyup.enter)  = "onKeyUp(email.value)" />-->

    <!--  <input [value] = "email" (keyup.enter)  = "onKeyUp()" />-->

    <!-- Two way binding -->
    <!-- <input [value] = "email" (keyup.enter)  = "email = $event.target.value; onKeyUp()" /> -->

    <!--Another Syntax of  Two way binding (two-way-binding-syntax) -->

    <!-- Automatically updates the value of component when we change input field-->
    <!-- <input [(ngModel)] = "email" (keyup.enter) = "onKeyUp()" /> -->

    <!-- Pipes -->
    {{course.title | uppercase |lowercase }}<br/>
    {{course.students |number }}<br/>
    {{course.rating | number:'1.1-1'}}<br/>
    {{course.price | currency: 'AUD' : true : '3.2-2' }}<br/>
    {{course.releaseDate | date: 'shortDate' }}<br/>

    <!--Custom Pipes -->
    {{text | summary: 10}}
    `
})
export class CoursesComponent {
    title = "List of Courses";
    colSpan = 2
    courses;
    isActive = true
    email = "user1@gmail.com"

    // Video # 49 Pipes
    course = {
        title: "The Complee Angular Course",
        rating: 4.86578,
        students: 30123,
        price: 190,
        releaseDate: new Date(2021, 6, 1)
    }
    text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    // constructor has a dependency of type courses Service
    // create an instance of coursesService and pass it to constructor
    // add coursesService as adependency of a class
    constructor(service: CoursesService) {
        // dependency injection
        //first instantiate dependencies and inject dependencies into the constructor of this class
        this.courses = service.getCourses()

    }
    // Logic for calling http endPoint

    getTitle() {
        return this.title
    }
    onDivClicked() {
        console.log("Div was clicked");

    }

    onSave($event) {
        // stop event bubbling
        $event.stopPropagation()
        // access event object
        console.log($event);

        console.log("Button is clicked");

    }
    // onKeyUp($event) {
    //     console.log($event.target.value);

    // }
    // onKeyUp(email) {
    //     console.log(email);
    //     console.log("Enter was pressed");
    // }
    onKeyUp() {
        console.log(this.email);

    }
}