import { Slider } from "infinite-react-carousel/lib";
import React from "react";
import Review from "../../components/review/Review";
import "./Gig.scss";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">{"FIVERR > GRAPHICS & DESIGN >"}</span>
          <h1 className="title">I will create ai generated art for you</h1>
          <div className="profile">
            <img className="profile-pp" src="/img/man.png" alt="" />
            <span className="username">Anna Bell</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider className='slider' slidesToShow={1} arrowsScroll={1}>
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/227338758/original/1317f7d5fc7aaf385b58ac87745181068f47ba15/design-custom-halloween-stickers-for-your-business.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/227338758/original/069cfe531bf179c3433e24b698b60e6d05a4ea14/design-custom-halloween-stickers-for-your-business.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/227338758/original/c5603b3d63e4c9f8c837c67b920d7eae7d8293ab/design-custom-halloween-stickers-for-your-business.png"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Hi everyone! In this gig, I&#39;ll create amazing 3d character
            design, and digital art, using AI! for your personal or commercial
            use. I will make any style according to your request, All I need is
            your idea or image reference. If you don&#39;t have any of these,
            don&#39;t worry just INBOX me so that we can discuss and bring your
            design to life.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img className="seller-pp" src="/img/man.png" alt="" />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="seller-details">
              <div className="lines">
                <div className="from">
                  <span>From</span>
                  <h5>USA</h5>
                </div>
                <div className="since">
                  <span>Member since</span>
                  <h5>Aug 2022</h5>
                </div>
              </div>
              <div className="lines">
                <div className="avgTime">
                  <span>Avg response time</span>
                  <h5>4 hours</h5>
                </div>
                <div className="lastDelivery">
                  <span>Last delivery</span>
                  <h5>1 day</h5>
                </div>
              </div>
              <div className="lines">
                <div className="lang">
                  <span>Language</span>
                  <h5>English</h5>
                </div>
              </div>
              <hr />
              <p className="userDesc">
                Hi, I’m Ramzi, A UI/UX Designer with 3+ years of experience from
                Algeria. In these 3 years, I have worked on many projects in
                Algeria and globally which helped many businesses reach their
                goal and users get their needs.
              </p>
            </div>
          </div>
          <div className="reviews">
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
        <div className="right">
          <div className="details">
            <span>1 AI generated image</span>
            <p className="price">$ 59.99</p>
          </div>
          <p className="desc">
            In this gig, I&#39;ll create amazing 3d character design, and
            digital art, using AI! for your personal or commercial use.
          </p>
          <div className="delivery">
            <div className="time">
              <img src="/img/clock.png" />
              <span>2 Days Delivery</span>
            </div>
            <div className="revisions">
              <img src="/img/recycle.png" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="promises">
            <div className="promise-details">
              <img className="tick" src="/img/greencheck.png" alt="" />
              <span className="text">Prompt writing</span>
            </div>
            <div className="promise-details">
              <img className="tick" src="/img/greencheck.png" alt="" />
              <span className="text">Image upscaling</span>
            </div>
            <div className="promise-details">
              <img className="tick" src="/img/greencheck.png" alt="" />
              <span className="text">Artwork delivery</span>
            </div>
            <div className="promise-details">
              <img className="tick" src="/img/greencheck.png" alt="" />
              <span className="text">Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
