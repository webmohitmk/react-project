// import React, { Component } from "react";

// class Footer extends Component {
//   render() {
//     return <div> Hello from class Component</div>;
//   }
// }

// export default Footer;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-4 position-fixed bottom-0 w-100">
      <div className="container">
        <div className="row">
          {/* First Container */}
          <div className="col-md-4">
            {/* <img src="your-logo-url.png" alt="Logo" className="mb-3" /> */}
            <p>
              Some information about the company or website. This can be a brief
              description or tagline.
            </p>
          </div>

          {/* Second Container */}
          <div className="col-md-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/home" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/services" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/more" className="text-white">
                  More
                </a>
              </li>
            </ul>
          </div>

          {/* Third Container */}
          <div className="col-md-4">
            <h5>Privacy Policies</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
