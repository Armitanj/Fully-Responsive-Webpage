import React from 'react'

import './Experience.css'
import { FaArrowRightLong } from 'react-icons/fa6'
export default function Experience() {
    return (
        <div className='experienceSec'>
            <div className="experienceLeftSide">
                <div className="backImg1"></div>
                <div className="backImg2"></div>
                <div className="img1">
                    <img src="/images/experience.png" alt="img" />
                </div>
            </div>
            <div className="experienceRightSide">
                <span className='exTitle'>EXPERIENCES</span>
                <h2 className='experienceTitle'>
                    <span>We Provide You The </span>
                    <span>Best Experience</span>
                </h2>
                <p className='experienceDesk'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                <span>
                    <a href="#" className='moreInfo'>More Info <FaArrowRightLong /></a>
                </span>
            </div>
        </div>
    )
}
