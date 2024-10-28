import React from 'react'

import { FaArrowRightLong } from "react-icons/fa6";
import './ChoosingComp.css'
export default function ChoosingComp({ title, desc }) {
    return (
        <div className='info'>
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href="#">More Info <FaArrowRightLong /></a>
        </div>
    )
}
