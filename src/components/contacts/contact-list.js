import React from 'react';
import Contact from './contact';


export default class ContactList extends React.Component {


  render() {
    
    //TODO: #1 Render of the contactList don't take into account api response
    /*
    const contacts = this.props.contactList.map((contact) =>
      <Contact model={contact} key={contact.id} />);
      */


     const contacts=this.props.contactList.map((contact) =>
     <Contact model={contact} key={contact.id} />);
    return (contacts)
  }

}

