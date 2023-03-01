import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="footer-links">
          <h3>Categories</h3>
          <span>Graphics & Design</span>
          <span>Digital Marketing</span>
          <span>Writing & Translation</span>
          <span>Video & Animation</span>
          <span>Music & Audio</span>
          <span>Programing & Tech</span>
          <span>Data</span>
          <span>Business</span>
          <span>Lifestyle</span>
          <span>Photography</span>
          <span>Sitemap</span>
        </div>
        <div className="footer-links">
          <h3>About</h3>
          <span>Careers</span>
          <span>Press & News</span>
          <span>Partnerships</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Intellectual Property Claims</span>
          <span>Investor Relations</span>
        </div>
        <div className="footer-links">
          <h3>Support</h3>
          <span>Help & Support</span>
          <span>Trust & Safety</span>
          <span>Selling on Fiver</span>
          <span>Buying on Fiverr</span>
        </div>
        <div className="footer-links">
          <h3>Community</h3>
          <span>Customer Success Stories</span>
          <span>Community hub</span>
          <span> Forum</span>
          <span>Events</span>
          <span>Blog</span>
          <span>Influencers</span>
          <span>Affiliates</span>
          <span>Business</span>
          <span>Podcast</span>
          <span>Invite a Friend</span>
          <span>Become a Seller</span>
          <span>Community Standards</span>
        </div>
        <div className="footer-links">
          <h3>More From Fiverr</h3>
          <span>Fiverr Business</span>
          <span>Fiverr Pro</span>
          <span>Fiverr Logo Maker</span>
          <span>Fiverr Guides</span>
          <span>Get Inspired</span>
          <span>Fiverr Select</span>
          <span>Clear Voice</span>
          <span>Fiverr Workspace</span>
          <span>Learn</span>
          <span>Invite a Friend</span>
          <span>Working Not Working</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h3>fiverr.</h3>
          <p>Fiverr International Ltd. 2023</p>
        </div>
        <div className="right">
          <img src='./img/paypal.png' />
          <img src='./img/google.png' />
          <img src='./img/facebook.png' />
          <img src='./img/netflix.png' />
          <img src='./img/pandg.png' />
        </div>
      </div>
    </div>
  )
}

export default Footer