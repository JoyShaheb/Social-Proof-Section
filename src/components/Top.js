import React from "react";
import stars from "./assets/icon-star.svg";
const Top = () => {
  const star = stars;
  const Rating = (num) => {
    return [...Array.from({ length: num }, (_, b) => b)].map((xx, key) => (
      <img key={key} src={star} alt="" />
    ));
  };
  return (
    <div className="top">
      <div className="left">
        <h2>10,000+ of our users love our products.</h2>
        <p>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <div className="right">
        <div className="review-1">
          <div className="star">{Rating(5)}</div>
          <div className="text">Rated 5 Stars in Reviews</div>
        </div>
        <div className="review-2">
          <div className="star">{Rating(5)}</div>
          <div className="text">Rated 5 Stars in Report Guru</div>
        </div>
        <div className="review-3">
          <div className="star">{Rating(5)}</div>
          <div className="text">Rated 5 Stars in BestTech</div>
        </div>
      </div>
    </div>
  );
};
export default Top;
