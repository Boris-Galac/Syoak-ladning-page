import React, { useState, useRef } from "react";
import "./css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Point from "./components/Point";
import Slide from "./components/Slide";
import AchievementsCard from "./components/AchievementsCard";
import SolutionFeature from "./components/SolutionFeature";
import { sliderData, AchievementsCardData } from "./data.js";

function App() {
  ///// SLIDER

  const innerWrapperRef = useRef(null);
  const [direction, setDirection] = useState(0);
  const prevSlide = () => {
    let abc = document.querySelector(".slide").scrollWidth;
    setDirection(1);
    innerWrapperRef.current.style.transition = "transform 0.5s ease-in-out";
    innerWrapperRef.current.style.transform = `translateX(${abc}px)`;
  };

  const nextSlide = () => {
    let abc = document.querySelector(".slide").scrollWidth;
    setDirection(-1);
    innerWrapperRef.current.style.transition = "transform 0.5s ease-in-out";
    innerWrapperRef.current.style.transform = `translateX(-${abc}px)`;
  };

  const transitionEnd = () => {
    if (direction === -1) {
      innerWrapperRef.current.appendChild(
        innerWrapperRef.current.firstElementChild
      );
    } else if (direction === 1) {
      innerWrapperRef.current.prepend(innerWrapperRef.current.lastElementChild);
    }

    innerWrapperRef.current.style.transition = "none";
    innerWrapperRef.current.style.transform = "translateX(0)";
  };

  // SLIDER DATA

  const Sliders = sliderData.map((obj) => {
    return (
      <Slide
        headline={obj.headline}
        heading={obj.heading}
        paragraph={obj.paragraph}
        img={obj.img}
        imgAlt={obj.imgAlt}
      />
    );
  });

  // ACHIEVEMENTS DATA

  const AchievementsCards = AchievementsCardData.map((obj) => {
    return (
      <AchievementsCard
        count={obj.count}
        label={obj.label}
        img={obj.img}
        imgAlt={obj.imgAlt}
      />
    );
  });

  return (
    <>
      <Header />
      <div className="left-desktop-col">
        <div aria-label="Syoak logo">
          <img
            src="./assets/images/logo.svg"
            alt="logo Syoak"
            className="logo-desktop"
          />
        </div>
        <div className="border">
          <img
            src="./assets/images/arrow.svg"
            alt="Arrow that signals to exist more content below"
            className="desktop-arrow"
          />
        </div>
      </div>
      <main className="main">
        <div className="container grid-center">
          {/* hero section */}

          <section className="hero-section">
            <div className="hero__focal-point d-grid">
              <h1 className="hero__headline">
                Our bussines takes the industry of oil & gass to a new level.
              </h1>
              <p className="hero__subheadline">
                We have a long and proud history givin emphasis to environment
                social and economic outcomes to deliver places that respond
              </p>
              <button className="cta-btn" aria-label="call to action button">
                <img src="./assets/icons/arrow-icon.svg" aria-hidden="true" />
                Learn more
              </button>
            </div>
            <div className="hero__point-tracker d-flex">
              <Point class="point__focal" label="Extraction" />
              <Point />
              <Point />
              <Point />
            </div>
          </section>

          {/* solution section */}

          <section className="solution mb-56">
            <article className="solution__article">
              <h2 className="solution__heading mb-40">SYOAK Solution</h2>
              <p className="solution__paragraph">
                SYOAK industry consists of companies that own and operate
                extensive networks of pipeline assets to connect producers of
                oil, natural gas and natural gas liquids from the prolific North
                American resources to key markets. We also distribute natural
                gas to a growing base of industrial and residential customers
                through transmission pipelines.
              </p>
            </article>
            <div className="solution__inner-wrapper d-grid">
              <SolutionFeature
                heading="Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk"
                paragraph="We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                img="./assets/images/solution-1-img.svg"
                imgAlt="picture of the machine in operation"
              />
              <SolutionFeature
                heading="Our bussines takes the industry of oil and gass to a new level."
                paragraph="We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                img="./assets/images/solution-2-img.svg"
                imgAlt="picture of fuel injection nozzle."
              />
              <SolutionFeature
                heading="Syoak serves more than 2,500 petrol stations globally"
                paragraph="We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                img="./assets/images/solution-3-img.svg"
                imgAlt="picture of fuel truck."
              />
            </div>
          </section>

          {/* solution slider section */}
          <section className="solution-slider mb-56">
            <div className="solution-slider__btns d-flex">
              <button
                tabIndex={0}
                onClick={prevSlide}
                className="slide-btn prev-slide"
              >
                <img
                  src="./assets/icons/arrow-left-icon.svg"
                  aria-hidden="true"
                />
              </button>
              <button
                tabIndex={0}
                onClick={nextSlide}
                className="slide-btn next-slide"
              >
                <img
                  src="./assets/icons/arrow-right-icon.svg"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="slider">
              <div
                onTransitionEnd={transitionEnd}
                ref={innerWrapperRef}
                className="slider-wrapper d-flex"
              >
                {Sliders}
              </div>
            </div>
          </section>

          {/* achievements section */}

          <section className="achievements-section">
            <article className="achievements__text-wrapper">
              <h2 className="achievements__heading">Our Achievements</h2>
              <p className="achievements__paragraph">
                SYOAK industry consists of companies that own and operate
                extensive networks of pipeline assets to connect producers of
                oil, natural gas and natural gas liquids from the prolific North
                American resources to key markets. We also distribute natural
                gas to a growing base of industrial and residential customers
                through transmission pipelines.
              </p>
            </article>
            <div className="achievements__card-wrapper d-flex">
              {AchievementsCards}
            </div>
          </section>

          {/* Contact form section */}

          <section className="contact-section">
            <h2 className="contact__heading mb-40">Get in Touch With Us</h2>
            <div className="contact__wrapper d-flex">
              <div>
                <form className="contact">
                  <div className="contact__input">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      placeholder="Mike"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="contact__input">
                    <label htmlFor="email">Email address</label>
                    <input
                      placeholder="mike@syoak.com"
                      type="email"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="contact__input mb-32">
                    <label htmlFor="email">Message</label>
                    <textarea
                      placeholder="Write something here..."
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </form>
                <div className="contact__verification">
                  <label htmlFor="checkbox">Verification</label>
                  <div className="contact__verification-wrapper d-flex">
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      className="checkbox"
                    />
                    <p>I am not a robot</p>
                  </div>
                  <button className="cta-btn d-flex">Send Message</button>
                </div>
              </div>
              <div>
                <img
                  src="./assets/images/google_map.png"
                  alt="picture of google map"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
