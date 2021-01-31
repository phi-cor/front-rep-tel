import React from 'react';
import ReactDOM from 'react-dom';


export default class Contact extends React.Component {
  constructor() {
    super();
  }

  render() {
    const model = this.props.model;
    return (

<form className="form" method="POST">
  <div className="form-group mb-2">
   
   <input type="text"  className="form-control-plaintext"  value={model.lname}
   onChange={()=>{console.log("Hello")}}/>
 </div>
 <div className="form-group mx-sm-3 mb-2">
  
   <input type="text"  className="form-control-plaintext"  value={model.fname}/>
 </div>

 <div class="form-group mx-sm-3 mb-2">
  
 <input type="text"  className="form-control-plaintext"  value={model.tel}/>
 </div>
 <button type="submit" className="btn btn-primary mb-2">Delete</button>
 

 
 </form>
     

    );
  }
}