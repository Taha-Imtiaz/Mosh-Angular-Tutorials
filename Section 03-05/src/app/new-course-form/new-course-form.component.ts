import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
form
//  form  =  new FormGroup({
  //  dealing with array of objects so use formArray class
  // topics: new FormArray(
    // empty array is a container for all topics in a form
//     []
//     )
//  })



//  addTopic
// addTopic(topic: HTMLInputElement) {
// // get reference of form Array and typecast abstract control object to formArray

// // console.log(formArray);

// this.topics.push(new FormControl(topic.value))
// topic.value = ''
// }

// removeTopic(topic: FormControl) {
//   // find the index of topic to remove
//  let index =  this.topics.controls.indexOf(topic)
// //  remove topic
//  this.topics.removeAt(index)
// }

// get topics() {
// // get reference of form Array and typecast abstract control object to formArray

//   return this.form.get('topics') as FormArray
// }

// formBuilder
// form  = new FormGroup({
//   name: new FormControl('', Validators.required),
//   // add subgroup
//   contact: new FormGroup({
//     email: new FormControl(),
//     phone: new FormControl(),

//   }),
//   topics: new FormArray([])
// })

// another syntax
constructor(fb: FormBuilder) {
this.form =  fb.group({
    name: ['', Validators.required],
    contact: fb.group({
      email: [],
      phone: []
    }),
    topics: fb.array([])
  })
}

}
