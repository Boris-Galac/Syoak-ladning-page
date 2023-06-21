import React from "react";

const Header = () => {
  const headerElement = document.querySelector(".header");
  const mainElement = document.querySelector(".main");

  // if (headerElement && mainElement) {
  //   const headerHeight = headerElement.scrollHeight;
  //   mainElement.style.paddingTop = `${headerHeight}px`;
  // }
  const navToggle = () => {
    const nav = document.querySelector(".nav");
    let windowWidth = window.innerWidth > 960;
    if (windowWidth) {
      nav.setAttribute("data-visible", "true");
    } else {
      nav.setAttribute("data-visible", "false");
    }
  };
  window.addEventListener("resize", navToggle);

  //// OPEN NAV MENU
  function toggleNav() {
    const nav = document.querySelector(".nav");
    const hamBtnLine = document.querySelectorAll(".ham-btn__line");
    const isVisible = nav.getAttribute("data-visible");

    if (isVisible === "true") {
      nav.setAttribute("data-visible", "false");
      nav.setAttribute("aria-expanded", "false");
      hamBtnLine.forEach((line) => {
        line.classList.remove("active");
      });
    } else {
      nav.setAttribute("data-visible", "true");
      nav.setAttribute("aria-expanded", "true");
      hamBtnLine.forEach((line) => {
        line.classList.add("active");
      });
    }
  }

  ////////// HEADER ON SCROLL

  const isScrolling = () => {
    const headerElement = document.querySelector(".header");
    let windowPosition = window.scrollY > 150;
    headerElement.classList.toggle("active", windowPosition);
  };

  window.addEventListener("scroll", isScrolling);

  return (
    <>
      <header className="header d-flex">
        <div aria-label="Syoak logo">
          <img
            src="./assets/images/logo.svg"
            alt="logo Syoak"
            className="logo-mobile"
          />
        </div>
        <button
          onClick={toggleNav}
          className="ham-btn d-flex"
          tabIndex="0"
          aria-controls="nav"
        >
          <div className="ham-btn__line"></div>
          <div className="ham-btn__line"></div>
          <div className="ham-btn__line"></div>
        </button>
        <nav
          id="nav"
          className="nav"
          data-visible="false"
          aria-expanded="false"
        >
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
