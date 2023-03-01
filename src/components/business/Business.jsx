import React from 'react';
import './Business.scss'

const Business = () => {
  return (
    <div className='business'>
        <div className="container">
            <div className="left">
            <h2 className='title'>fiverr <i>business</i></h2>
            <h2 className='sub-title'>A business solution designed for <i>teams</i></h2>
            <p className='sub-desc'>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
            <div className='info'>
                <div>
                    <img src='./img/check.png' />
                    <p className='info-text'>Connect to freelancers with proven business experience</p>
                </div>
                <div>
                    <img src='./img/check.png' />
                    <p className='info-text'>Get matched with the perfect talent by a customer success manager</p>
                </div>
                <div>
                    <img src='./img/check.png' />
                    <p className='info-text'>Manage teamwork and boost productivity with one powerful workspace</p>
                </div>
            </div>
            <button>Explore Fiverr Business</button>
            </div>
            <div className="right">
                <img src='./img/business.png' />
            </div>
        </div>
    </div>
  )
}

export default Business