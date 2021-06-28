import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ContactActions } from "../../actions/contactActions"

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @select() contacts:any;
  
  constructor(private ngRedux: NgRedux<any>, private _contactActions: ContactActions) { }

  ngOnInit() {
    this.ngRedux.dispatch<any>(this._contactActions.loadContacts());
  }

  deleteContact(id: any) {
    this.ngRedux.dispatch<any>(this._contactActions.deleteContact(id));
  }
  
}
