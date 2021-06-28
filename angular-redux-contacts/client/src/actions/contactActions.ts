import { Injectable } from '@angular/core';
import * as types from './actionTypes';
import { ContactService } from "../app/contact.service";

@Injectable()
export class ContactActions {
    constructor(private _contactService: ContactService) { }

    loadedContacts(contacts) {
        return { type: types.LOADED_CONTACTS, contacts};
    }
  
    addedContact(contact) {
        return { type: types.ADDED_CONTACT, contact};
    }
  
    deletedContact(id) {
        return { type: types.DELETED_CONTACT, id};
    }
  
    loadContacts() {
        return dispatch => {
            return this._contactService.getContacts().subscribe(
                (contacts: any) => dispatch(this.loadedContacts(contacts))
            );
        }
    }

    addContact(contact: any) {
        return dispatch => {
            return this._contactService.addContact(contact).subscribe (
                (contact: any) => dispatch(this.addedContact(contact))
            );
        }
    }

    deleteContact(id: any) {
        return dispatch => {
            return this._contactService.deleteContact(id).subscribe (
                (data: any) => dispatch(this.deletedContact(id))
            );
        }
    }
}