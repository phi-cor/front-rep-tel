import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactList from './components/contacts/contact-list';
import ContactController from './controllers/contact-controller';

class Board extends React.Component {
 
 contactList=new ContactList();
  render() {
    const status = 'Next player: X';

    return (
      
      <div>
 <ContactController/>
      </div>
      
    );
  }
}



// ========================================

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
