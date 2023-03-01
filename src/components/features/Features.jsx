import React from "react";
import "./Features.scss";

const data = [
  {
    id: 1,
    title: "The best for every budget.",
    desc: "Find high-quality services at every price point. No hourly rates, just project-based pricing.",
  },
  {
    id: 2,
    title: "Quality work done quickly.",
    desc: "Find the right freelancer to begin working on your project within minutes.",
  },
  {
    id: 3,
    title: "Protected payments, every time.",
    desc: "Always know what you'll pay upfront. Your payment isn't released until you approve the work.",
  },
  {
    id: 4,
    title: "24/7 support.",
    desc: "Questions? Our round-the-clock support team is available to help anytime, anywhere.",
  },
];

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="left">
          <h2>A whole world of freelance talent at your fingertips.</h2>
          <div className="info">
            {data.map((item) => (
              <div className="infoContainer" key={item.id}>
                <div className="title">
                  <img src="./img/check.png" alt="" />
                  <span className="title-text">{item.title}</span>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="right">
            <video controls>
                <source src='./img/video.mp4' type='video/mp4'/>
            </video>
        </div>
      </div>
    </div>
  );
};

export default Features;
