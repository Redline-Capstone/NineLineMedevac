import React from "react";
import SWFlogo from './SF_logo_dark_bg.svg'
import './Navigation'





function Footer() {
  return (
    <div className='footer'>
      <footer className="py-2 bg-dark fixed-bottom">
        <div className="container">
          <div className="m-4 text-bottom text-white" >
          <a href='https://armyfuturescommand.com/software-factory/'>
          <img className = 'SWF-Logo' src={SWFlogo} /> </a>
          &copy;

          
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"></link>


          <div className="wrapper">
            <ul>
              <li className="facebook"><a href="https://www.facebook.com/ArmyFutures"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
              <li className="twitter"><a href="https://www.twitter.com/ArmyFutures"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
              <li className="instagram"><a href="https://instagram.com/armyfutures"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
              <li className="linkedin"><a href="https://www.linkedin.com/company/armyfutures"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>







          
              
          </div>
        </div>
        
        
      </footer>
    </div>
  );
}

export default Footer;