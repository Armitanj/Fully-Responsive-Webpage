import React from 'react'

import './Materials.css'
import { FaArrowRightLong } from 'react-icons/fa6'
export default function Materials() {
    return (
        <div className='materialSec'>
            <div className="materialLeftSide">
                <span>MATERIALS</span>
                <h2 className='materialTitle'>Very Serious Materials For Making Furniture</h2>
                <p className='materialDesk'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                <span>
                    <a href="#" className='moreInfo'>More Info <FaArrowRightLong /></a>
                </span>
            </div>
            <div className="materialRightSide">
                <div className='imgCol'>
                    <img src="/images/group (2).png" alt="img2" className='img1' />
                    <img src="/images/group (3).png" alt="img3" className='img2' />
                </div>
                <img src="/images/group (1).png" alt="img1" className='img3' />
                <div className="backImg3"></div>
            </div>
        </div>
    )
}
