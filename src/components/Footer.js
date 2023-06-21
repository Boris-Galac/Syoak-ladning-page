import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper d-flex">
          <div className="footer__col d-grid">
            <div className="footer__row d-grid">
              <img
                src="./assets/images/logo.svg"
                className="mb-16"
                alt="Footer logo Syoak"
              />
              <p>
                We have a long and proud history givin emphasis to environment
                social and economic outcomes to deliver places that respond
              </p>
            </div>
            <div className="footer__row d-grid">
              <a href="#" className="d-flex footer__link">
                <img
                  src="./assets/icons/location-icon.svg"
                  aria-hidden="true"
                />
                1182 Williams Avenue, San Francisco
              </a>
              <a href="#" className="d-flex footer__link">
                <img src="./assets/icons/email-icon.svg" aria-hidden="true" />
                hello@syoak.com
              </a>
            </div>
          </div>
          <div className="footer__col">
            <nav className="footer__nav d-flex">
              <div className="footer__nav-col">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a className="footer__link" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="footer__link" href="#">
                      Company
                    </a>
                  </li>
                  <li>
                    <a className="footer__link" href="#">
                      How we do it
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__nav-col">
                <h4>Services</h4>
                <ul>
                  <li>
                    <a className="footer__link" href="#">
                      Oil & Gas Industry
                    </a>
                  </li>
                  <li>
                    <a className="footer__link" href="#">
                      Fuel Management
                    </a>
                  </li>
                  <li>
                    <a className="footer__link" href="#">
                      Chemical Research
                    </a>
                  </li>
                  <li>
                    <a className="footer__link" href="#">
                      Power & Energy
                    </a>
                  </li>
                  <li>
                    <a className="footer__link" href="#">
                      Eco & Biopower
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__nav-col">
                <h4>Projects</h4>
                <ul>
                  <li>
                    <a className="footer__link" href="#">
                      Factory
                    </a>
                  </li>
                  <li>
                    <a className="footer__link" href="#">
                      Industry
                    </a>
                  </li>
                  <li>
                    <a className="footer__link" href="#">
                      Manufactoring
                    </a>
                  </li>
                  <li>
                    <a className="footer__link" href="#">
                      Mechanical
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="copyright">
          <p className="copyright__text">
            Copyright &copy; 2019 syoak.com All rights reserved.
          </p>
          <ul className="d-flex">
            <li>
              <a className="copyright__text" href="#">
                Support
              </a>
            </li>
            <li>
              <a className="copyright__text" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="copyright__text" href="#">
                Terms of Condition
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
