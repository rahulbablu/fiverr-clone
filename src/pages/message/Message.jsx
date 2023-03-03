import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";
const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link className="link" to="/messages">
            Messages
          </Link>{" "}
          {"> John Doe"}
        </span>
        <div className="messages">
          <div className="item">
            <img src="/img/man.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sed
              quae! Molestias harum unde similique tenetur eum quam facere
              voluptatibus obcaecati natus voluptates vel quia minima
              voluptatum, corporis cupiditate atque.
            </p>
          </div>
          <div className="item owner">
            <img src="/img/man.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sed
              quae! Molestias harum unde similique tenetur eum quam facere
              voluptatibus obcaecati natus voluptates vel quia minima
              voluptatum, corporis cupiditate atque.
            </p>
          </div>
        </div>
        <hr/>
        <div className="write">
          <textarea
            name=""
            id=""
            cols="30"
            rows="4"
            placeholder="Write a message"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
