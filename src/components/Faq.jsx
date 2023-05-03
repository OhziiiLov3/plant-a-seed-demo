import React from 'react'
import './FaqStyles.css';

const Faq = () => {
  return (
    <div className='section-faq'>
        <div className="container">
            <div className="col-1">
                <h3>Frequently asked questions</h3>
                <p>What do we do?</p>
                <p>Connect with One of our <span>team </span>leaders</p>
            </div>
            <div className="col-2">
                <div className="faq">
                    <h5>Can God Heal me?</h5>
                    <p>Yes,[insert scripture]</p>
                </div>
                 <div className="faq">
                    <h5>Does God hear my Prayers?</h5>
                    <p>Yes,[insert scripture]</p>
                </div>
                <div className="faq">
                    <h5>Why is there pain in the world?</h5>
                    <p>Lorem ipsum dolor sit amet.,[insert scripture]</p>
                </div>
                <div className="faq">
                    <h5>Is God mad at me?</h5>
                    <p>No,[insert scripture]</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq