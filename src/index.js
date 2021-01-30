import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactList from './components/contact-list';

class Board extends React.Component {
 
 contactList=new ContactList();
  render() {
    const status = 'Next player: X';

    return (
      
      <div>
 <ContactList/>
      </div>
      
    );
  }
}



// ========================================

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
