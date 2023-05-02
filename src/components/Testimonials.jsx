import React from 'react'
import { FaPrayingHands } from 'react-icons/fa'
import './TestimonialsStyles.css'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className="container">
            <div className="outline">
                <div className="content">
                   <i><FaPrayingHands/>Plant The Seed</i>
                   <p className="body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, expedita suscipit nostrum ea sit consectetur neque maiores nam quaerat numquam voluptatum, aperiam eaque repellendus ad? Explicabo modi quia id possimus?
                   </p>
                   <div className="name">
                    <p>Prayer Team</p>
                    <p>Holy Spirit Led</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials