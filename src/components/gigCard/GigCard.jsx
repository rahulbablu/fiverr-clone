import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";

const GigCard = ({ item }) => {
  return (
    <Link className="link" to='/gig/123'>
      <div className="gigCard">
        <img src={item.img} />
        <div className="info">
          <div className="user">
            <img className="profile-pic" src={item.pp} />
            <p className="username">by {item.username}</p>
          </div>
          <p className="description">{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" />
            <span>{item.star}</span>
          </div>
        </div>
        <div className="details">
          <img src="./img/heart.png" />
          <div className="price">
            <span>Starting At</span>
            <h4>₹{item.price}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
