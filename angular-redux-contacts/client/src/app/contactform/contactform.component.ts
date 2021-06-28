import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { ContactActions } from "../../actions/contactActions"

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {
  name: string;
  mobile: string;
  email: string;
  
  constructor(private ngRedux: NgRedux<any>, private _contactActions: ContactActions) { }

  onSubmit(formValue: any) {
    let newContact = {
      name: formValue.name,
      mobile: formValue.mobile,
      email: formValue.email
    };
    this.ngRedux.dispatch<any>(this._contactActions.addContact(newContact));
  }
}
