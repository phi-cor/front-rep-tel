import React from 'react';
import ReactDOM from 'react-dom';


export default class Contact extends React.Component {
  constructor() {
    super();
  }

  render() {
    const model = this.props.model;
    return (
      <div >
        <span>{model.lname}</span> <span>{model.fname}</span><span> {model.tel} </span>
      </div>

    );
  }
}