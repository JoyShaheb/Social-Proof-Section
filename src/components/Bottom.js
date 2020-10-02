import React from "react";
import anne from "../assets/image-anne.jpg";
import colton from "../assets/image-colton.jpg";
import irene from "../assets/image-irene.jpg";
const Bottom = () => {
  return (
    <div className="bottom">
      <div className="CARD-1">
        <div className="card-block">
          <div className="card-img">
            <img src="../assets/image-colton.jpg" alt="" />
          </div>
          <div className="card-info">
            <p className="card-name">Colton Smith</p>
            <p className="card-status">Verified Buyer</p>
          </div>
        </div>
        <div className="card-text">
          "We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!"
        </div>
      </div>

      <div className="CARD-2">
        <div className="card-block">
          <div className="card-img">
            <img src={irene} alt="" />
          </div>
          <div className="card-info">
            <p className="card-name">Irene Roberts</p>
            <p className="card-status">Verified Buyer</p>
          </div>
        </div>
        <div className="card-text">
          "Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery."
        </div>
      </div>

      <div className="CARD-3">
        <div className="card-block">
          <div className="card-img">
            <img src={anne} alt="" />
          </div>
          <div className="card-info">
            <p className="card-name">Anne Wallace</p>
            <p className="card-status">Verified Buyer</p>
          </div>
        </div>
        <div className="card-text">
          "Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone!"
        </div>
      </div>
    </div>
  );
};
export default Bottom;
