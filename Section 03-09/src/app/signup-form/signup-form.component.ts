import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  // creating a form group obj
  // simple formGroup
  // form = new FormGroup({
  //   // creating formControl object

  //   // username: new FormControl(initialValue, validators, async validator function),

  //   username: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //     // add a custom validator
  //     // UsernameValidators.cannotContainSpace


  //   ], UsernameValidators.shouldBeUnique),
  //   password: new FormControl('', Validators.required),

  // })

  // nested formGroup
  form = new FormGroup({
    // creating new formGroup
    account: new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),

    })
  })

  // define a getters to get username and password
  get username() {
     // access simple form field
     console.log(this.form.get('username'));

    //  nested form group
    console.log(this.form.get('account.username'));
    // nested form group
    return this.form.get('account.username')

    // access simple form field
    // return this.form.get('username')
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    })
  }
}

