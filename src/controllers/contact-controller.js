import React from 'react';
import ContactModel from '../models/contact-model';
import ContactList from "../components/contacts/contact-list";
import ContactService from "../services/contact-service"
export default class ContactController extends React.Component {

  constructor() {
    super();
    this.contactListState = true;
    this.contactService = new ContactService();
    this.contactList=[new ContactModel("Carrey","Marie","1222334455","1"),
    new ContactModel("Sims","Albert","4222334455","2")];

    console.log(this.contactList);
  }


  /*
  new=()=>{
   
  return this.contactService.getContactList()
  
  }
  /*
  delete=()=>{
   
  return this.contactService.getContactList()
  
  }
  update=()=>{
   
  return this.contactService.getContactList()
  
  }
  */
  

  render() {


    
    return (
      <ContactList contactList={this.contactList}></ContactList>

    );
  }
}