import React from "react";
import { Link, withRouter } from "react-router-dom";
import redlineChopper from './redlineChopper.png';




function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/home">
            {/* <img src="https://media.gq-magazine.co.uk/photos/5d1398faeef921e6e09ff155/16:9/w_1920,c_limit/airbus-helicopters-4-gq-3jun15-pr_b.jpg"/> */}
            {/* <img src={logo} style={{width:100, marginTop: -7}} /> */}
            <img className = 'redlineLogo' src={redlineChopper} />
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  NINE LINE
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/DispatchView" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/DispatchView">
                  DISPATCHER
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Responder" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Responder">
                  RESPONDER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);