import React from "react";
import { Link, withRouter } from "react-router-dom";
import redlineChopper from './redline-logomk2.png';




function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            {/* <img src="https://media.gq-magazine.co.uk/photos/5d1398faeef921e6e09ff155/16:9/w_1920,c_limit/airbus-helicopters-4-gq-3jun15-pr_b.jpg"/> */}
            {/* <img src={logo} style={{width:100, marginTop: -7}} /> */}
            <img className = 'redlineLogo' src={redlineChopper} alt="the choppa" />
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                {/* <button className='btn-light-2'>  */}
                <Link className="nav-link" to="/">
                  NINE LINE 
                  <span className="sr-only">(current)</span>
                </Link>
                {/* </button> */}
              </li>
              <li 
                className={`nav-item  ${
                  props.location.pathname === "/DispatchView" ? "active" : "" 
                }`}
              >
                {/* <button className='btn-light-2'> */}
                <Link className="nav-link" to="/DispatchView">
                  DISPATCHER
                </Link>
                {/* </button> */}
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/Responder" ? "active" : ""
                }`}
              >
                {/* <button className='btn-light-2'> */}
                <Link className="nav-link" to="/Responder">
                  RESPONDER
                </Link>
                {/* </button> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);