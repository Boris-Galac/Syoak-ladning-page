import React from "react";

const Point = (props) => {
  return (
    <>
      <span className="point">
        <span className={`point__circle ${props.class}`}></span>
        {props.label && <p className="point__label">{props.label}</p>}
      </span>
    </>
  );
};

export default Point;
