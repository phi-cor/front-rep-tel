import React from 'react';
import Contact from './contact';


export default class ContactList extends React.Component {


  render() {
    
    console.log(this.props);
    const contacts = this.props.contactList.map((contact) =>
      <Contact model={contact} key={contact.id} />);

    return (contacts)
  }

}

