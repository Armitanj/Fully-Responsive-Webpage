import React from 'react'

import './Testimonials.css'
export default function Testimonials() {
    const testimonialsImg = [
        { img: 'images/review (1).png' },
        { img: 'images/review (2).png' },
        { img: 'images/review (3).png' }
    ]
    return (
        <div className='testimonialsSec'>
            <span>TESTIMONIALS</span>
            <h2 className='testimonialsTitle'>Our Client Reviews</h2>
            <div className="reviews">
                {testimonialsImg.map((testi, index) => (
                    <div key={index} className="review">
                        <img src={testi.img} alt="img" />
                    </div>
                ))}


            </div>
        </div>
    )
}
