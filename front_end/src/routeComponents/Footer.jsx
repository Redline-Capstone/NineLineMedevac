import React from "react";
import SWFlogo from './SF_logo_dark_bg.svg'
import './Navigation'


function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-bottom text-white" >
          <img className = 'SWF-Logo' src={SWFlogo} /> &copy;

          
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>


          <div class="wrapper">
            <ul>
              <li class="facebook"><a href="https://www.facebook.com/ArmyFutures"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
              <li class="twitter"><a href="https://www.twitter.com/ArmyFutures"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
              <li class="instagram"><a href="https://instagram.com/armyfutures"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
              <li class="google"><a href="https://armyfuturescommand.com/software-factory/"><i class="fab fa-google-plus-g" aria-hidden="true"></i></a></li>

            </ul>
          </div>







          
              
          </p>
        </div>
        
        
      </footer>
    </div>
  );
}

export default Footer;