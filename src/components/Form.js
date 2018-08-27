import React, {Component} from 'react';

class Form extends Component {
  render(){
  return(
      <div className="container form mt-5 contact">
         <h1 className="text-center">Contact</h1>
       <div className='row'>
        <div className='col-12 col-sm-6 col-md-6 mt-3'>
           <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Name *"/>
        </div>
         <div className='col-12 col-sm-6 col-md-6 mt-3'>
           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email *"/>
        </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 mt-3">
           <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message *"></textarea>
           <button type="submit" className="btn btn-secondary  btn-md btn-block mt-3 mb-3">Submit</button>
          </div>
        </div>
      </div>
  )
 }
}
export default Form;
