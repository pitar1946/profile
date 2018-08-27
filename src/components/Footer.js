import React from 'react';

const Footer = () => {
  return(
    <footer className="page-footer font-small  pt-4 footer">
       <div className="container text-center text-md-left">
        <div className="row text-center text-md-left mt-3 pb-3">
         <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
           <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur
           adipisicing elit.</p>
         </div>
         <hr className="w-100 clearfix d-md-none"/>
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 test">
         <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
         <p>
           <a>MDBootstrap</a>
         </p>
         <p>
           <a>React</a>
         </p>
         <p>
          <a>BrandFlow</a>
        </p>
        <p>
          <a>Bootstrap Angular</a>
        </p>
      </div>
       <hr className="w-100 clearfix d-md-none"/>
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 test">
         <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
         <p>
           <a>Your Account</a>
         </p>
         <p>
           <a>Become an Affiliate</a>
         </p>
         <p>
           <a>Shipping Rates</a>
         </p>
         <p>
           <a>Help</a>
         </p>
      </div>
       <hr className="w-100 clearfix d-md-none"/>
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 test">
         <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
         <p>
           <i className=" mr-3"></i> New York, NY 10012, US</p>
         <p>
           <i className=" mr-3"></i> info@gmail.com</p>
         <p>
           <i className=" mr-3"></i> + 01 234 567 88</p>
         <p>
           <i className=" mr-3"></i> + 01 234 567 89</p>
       </div>
     </div>
   </div>
  </footer>
  )
}
export default Footer;
