import React from 'react';
import ContactList from "../components/contacts/contact-list";
import ContactService from "../services/contact-service"
export default class ContactController extends React.Component {

  constructor(props) {
    super(props);
    this.contactListState = true;
    this.contactService = new ContactService();
    this.list;

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
  componentDidMount() {
    () => { this.list = this.contactService.getContactList(); }
  }

  render() {


    console.log(this.list);
    return (
      <ContactList contactList={this.list}></ContactList>

    );
  }
}