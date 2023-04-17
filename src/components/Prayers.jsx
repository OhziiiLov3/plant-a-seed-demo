import React from 'react'

import './PrayersStyles.css'

const Prayers = () => {
  return (
    <div className='prayers-layout'>
        <div className="container">
            <div className="content">
                <div className="top-content">
                    <div>
                        <h2>Prayers change Lives <span>Sow a seed today</span></h2>
                        <p>Plant the seed, We will water it, God will do rest!</p>
                    </div>
                    <div className="btn-div">
                        <button>Sow a seed today!</button>
                    </div>
                </div>
                <div className="bottom-content">
                    <div className="card">
                        <p><span>Everything you need</span></p>
                        <h3>Prayer Platform</h3>
                        <p className='card-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nostrum.</p>
                    </div>
                    <div className="card">
                        <div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    {/*  Card 2*/}
                      <div className="card">
                        <div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prayers