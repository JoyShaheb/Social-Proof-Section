import React from "react";
import anne from "../../public/images/image-anne.jpg";
import colton from "../../public/images/image-colton.jpg";
import irene from "../../public/images/image-irene.jpg";
const Bottom = () => {
  return (
    <div className="bottom">
      <div className="card-1">
        <div className="card-top">
          <img src={colton} alt="" />
        </div>
        <div className="card-info">
          <p className="card-name">Colton Smith</p>
          <p className="card-position">Verified Buyer</p>
        </div>
        <div className="card-bottom">
          "We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!"
        </div>
      </div>
      <div className="card-2">
        <div className="card-top">
          <img src={irene} alt="" />
        </div>
        <div className="card-info">
          <p className="card-name">Irene Roberts</p>
          <p className="card-position">Verified Buyer</p>
        </div>
        <div className="card-bottom">
          "Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery."
        </div>
      </div>
      <div className="card-3">
        <div className="card-top">
          <img src={anne} alt="" />
        </div>
        <div className="card-info">
          <p className="card-name">Anne Wallace</p>
          <p className="card-position">Verified Buyer</p>
        </div>
        <div className="card-bottom">
          "Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone!"
        </div>
      </div>
    </div>
  );
};
export default Bottom;
