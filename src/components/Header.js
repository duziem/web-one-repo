import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <img src="../../assets/PwC-logo.svg" alt="" height="70px" width="70px" />
          <h2 style={{ color: "#fff" }}>Student Website</h2>

          <div>
            <ul>
              <li>
                {/* <a href="index.html">Home</a> */}
                <Link to= "/">Home</Link>
              </li>
              <li>
                {/* <a href="contactus.html">Contact Us</a> */}
                <Link to= "/contactus">Contact us</Link>
              </li>
              <li>
              <Link to= "/gallery">Gallery</Link>
              </li>
              <li>
              <Link to="/applicationform">Application Form</Link>
              </li>
              <li>
              <Link to="/aboutus">About Us</Link>
              </li>
              <li>
              <Link to="/students-data">Student Data</Link>
            </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
