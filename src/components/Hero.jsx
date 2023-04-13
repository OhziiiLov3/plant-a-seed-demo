import React from 'react'
import { AiFillHeart, } from 'react-icons/ai'

import './HeroStyles.css'
import {FaPrayingHands, FaGoogle, FaPray, FaTwitter , FaFacebook} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="content">
                <div className="col-1">
                    <h1>Sow a Seed, Change a life</h1>
                    <h1><span className="primary-color">Prayer Ministery</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni id ratione in sunt? At.
                    </p>
                    <div className="used-by">
                        <p>What we do</p>
                        <div className="icons">
                            <i><FaPrayingHands/>Prayer</i>
                            <i><AiFillHeart/>Healing</i>
                            <i><FaPray/>Intercession</i>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="form-layout">
                        <div className="form-container">
                            <p className="sign-in-txt">Sign in with</p>
                            <div className="social-login">
                                <i><FaFacebook size={20}/></i>
                                <i><FaGoogle size={20}/></i>
                                <i><FaTwitter size={20}/></i>
                            </div>
                            <div className="divider">
                                <p><span>Or</span></p>
                            </div>
                            <form action="">
                                <input type="text" placeholder='Name' />
                                <input type="email" placeholder='Email' />
                                <input type="password" placeholder='Password' />
                                <button style={{backgroundColor: "#dda15e"}}className='button1'>Create your account</button>
                            </form>
                        </div>
                        <div className="form-footer">
                            <p>You send requests, We Plant the Seeds
                         <br />
                            <span className="primary-color">We all need Prayer</span> and <span className="primary-color">Love</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero