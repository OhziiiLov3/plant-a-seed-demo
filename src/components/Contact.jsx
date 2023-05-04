import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import './ContactStyles.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="container">
        <div className="col-1">
          <div className="content">
            <div>
              <h2>Connect with us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, temporibus!</p>
            </div>
            <div className="address">
              <p>777 Holy Water Dr</p>
              <p>Zion, Kingdom</p>
            </div>
            <div className="icons">
              <FaPhone style={{marginRight: '1rem'}}/>
              <p>+1 (510)-333-7777</p>
            </div>
            <div className="icons">
              <FaEnvelope style={{marginRight: '1rem'}}/>
              <p>planetseeds@gmail.com</p>
            </div>
            <div className="careers">
              <p>Need Pray?<span>Connect with a team member</span></p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <form action="">
            <input type="text" placeholder='Full Name' />
            <input type="email" placeholder='Email' />
            <input type="phone" placeholder='Phone' />
            <textarea name="Message" placeholder='Message' cols="30" rows="10"></textarea>
              <div className="checkbox">
                <input type="checkbox" />
                <p>By Checking the Box, One of our <span>team members</span>with reach out to you.</p>
              </div>
              <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact