import React from "react";
import Point from "./Point";

const Slide = (props) => {
  return (
    <article className="slide">
      <div className="point-wrapper">
        <Point class="point__focal" label="Extraction" />
      </div>
      <div className="solution-slider__inner-wrapper">
        <div className="solution-slider__col mb-40">
          <h2 className="mb-24">{props.headline}</h2>
          <h3 className="mb-16">{props.heading}</h3>
          <p>{props.text}</p>
        </div>
        <figure className="solution-slider__col">
          <img src={props.img} alt={props.altImg} />
        </figure>
      </div>
    </article>
  );
};

export default Slide;
