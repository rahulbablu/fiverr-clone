import React from "react";
import "./Review.scss";

const Review = () => {
  return (
    <div className="review">
      <div className="review-container">
        <div className="left">
          <img src="/img/man.png" alt="" />
        </div>
        <div className="review-right">
          <h5 className="username">Gingigi</h5>
          <span className="country">India</span>
          <div className="stars">
            <div className="stars-details">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
            <div className="ago">
              <span>3 weeks ago</span>
            </div>
          </div>
          <p className="review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            animi asperiores maiores fugiat corporis illum, vel magni quos at
            sunt placeat omnis dignissimos laborum perspiciatis incidunt modi,
            fugit quaerat. Quibusdam.
          </p>
          <div className="helpful">
            <h6>Helpful?</h6>
            <div className="yes">
              <img src="/img/like.png" alt="" />
              <h6>Yes</h6>
            </div>
            <div className="no">
              <img className="dislike" src="/img/dislike.png" alt="" />
              <h6>No</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
