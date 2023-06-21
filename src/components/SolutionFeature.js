import React from "react";

const SolutionFeature = (props) => {
  return (
    <>
      <figure className="solution__feature">
        <div>
          <h3 className="solution__feature-heading mb-16">{props.heading}</h3>
          <p className="solution__feature-paragraph">{props.paragraph}</p>
        </div>
        <div>
          <img src={props.img} alt={props.altImg} />
        </div>
      </figure>
    </>
  );
};

export default SolutionFeature;
