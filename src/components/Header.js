import React from "react";

const Header = () => {
  // const headerHeight = document.querySelector(".header").scrollHeight;
  // const mainElement = (document.querySelector(".main").style = `
  //   padding-top: ${headerHeight}px ;
  // `);
  return (
    <>
      <header className="header d-flex">
        <div aria-label="Syoak logo">
          <img src="./assets/images/logo.svg" alt="logo Syoak" />
        </div>
        <button className="ham-btn d-flex" tabindex="0" aria-controls="nav">
          <div className="ham-btn__line"></div>
          <div className="ham-btn__line"></div>
          <div className="ham-btn__line"></div>
        </button>
        <nav className="nav" data-visible="false" aria-expanded="false">
          <ul className="nav__list d-flex">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                About us
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Blog
              </a>
            </li>
          </ul>
          <div
            className="header-login-link"
            aria-label="header login and signup buttons"
          >
            <button className="btn-with-icon d-flex">
              <img src="../assets/icons/login-icon.svg" aria-hidden="true" />
              Log in
            </button>
            <button className="btn-with-icon d-flex">
              <img src="../assets/icons/contact-icon.svg" aria-hidden="true" />
              Contact us
            </button>
            <button className="secondary-btn">Sign up</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
