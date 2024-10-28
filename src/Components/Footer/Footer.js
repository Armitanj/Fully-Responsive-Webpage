import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import './Footer.css'
export default function Footer() {
    return (
        <div className='footerSec'>
            <div className="upperFooter">
                <div className="col1">
                    <h3>Panto</h3>
                    <br /><br />
                    <p className='footerDes'>The advantags of hiring a workspace with<br />us is that gives you comfortable service<br />and all-around facilities.</p>
                </div>
                <div className="col2">
                    <span className='footerTitle'>Services</span>
                    <br /><br />
                    <span><a href="#">Email Marketing</a></span><br /><br />
                    <span><a href="#">Campaigns</a></span><br /><br />
                    <span><a href="#">Branding</a></span>

                </div>
                <div className="col3">
                    <span className='footerTitle'>Furniture</span>
                    <br /><br />
                    <span><a href="#">Beds</a></span><br /><br />
                    <span><a href="#">Chair</a></span><br /><br />
                    <span><a href="#">All</a></span>


                </div>
                <div className="col4">
                    <span className='footerTitle'>Follow US</span>
                    <br /><br />
                    <span><a href="#"><FaFacebookF className='socialIcons' />Facebook</a></span><br /><br />
                    <span><a href="#"><FaTwitter className='socialIcons' />Twitter</a></span><br /><br />
                    <span><a href="#"><FaInstagram className='socialIcons' />Instagram</a></span>
                </div>
            </div>
            <div className="bottomFooter">
                <div>
                    <span className='span1'>Copyright © 2020. Lo</span>
                </div>
                <div className='bottomBottomFooter'>

                    <span className='span2'>Terms & Conditions</span>
                    <span className='span3'>Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}
