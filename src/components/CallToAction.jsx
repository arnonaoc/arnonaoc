import React from 'react'
import './CallToAction.css'
import { FiCode } from 'react-icons/fi';

function CallToAction() {
  return (
    <div className = "cta-bg">
        <div className="overlay"></div>
        <div className='container'>
            <div className="cta-text">
                <FiCode className='FiCode'/>
            <h2>We're react Dev team</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae obcaecati consequatur fugiat asperiores, tenetur eveniet odio quisquam modi eius ipsa architecto sint quasi beatae repellendus nostrum, ducimus cupiditate nemo blanditiis!</p>
            <a href="#" className="cta-btn">get to know us</a>
            </div>
        </div>
    </div>
  )
}

export default CallToAction