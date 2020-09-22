import React from "react";
const Top = () => {
  //  Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
  const star = `https://i.ibb.co/mFQ9PX3/star.png`;
  const Rating = (num) => {
    return [...Array.from({ length: num }, (_, b) => b)].map((xx) => (
      <img src={star} alt="" />
    ));
  };
  return (
    <div className="">
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
          <div className="star">{Rating(4)}</div>
          <div className="text">Rated 5 Stars in Report Guru</div>
        </div>
        <div className="review-3">
          <div className="star">{Rating(2)}</div>
          <div className="text">Rated 5 Stars in BestTech</div>
        </div>
      </div>
    </div>
  );
};
export default Top;