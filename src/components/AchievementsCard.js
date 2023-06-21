import React from "react";

const AchievementsCard = (props) => {
  return (
    <>
      <figure className="achievements-card">
        <div className="achievements-card__image-wrapper grid-center">
          <img
            className="achievements-card__image"
            src={props.img}
            alt={props.imgAlt}
          />
        </div>
        <span className="achievements-card__count mb-8">{props.count}</span>
        <p className="achievements-card__label">{props.label}</p>
      </figure>
    </>
  );
};

export default AchievementsCard;
