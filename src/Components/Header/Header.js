import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import ChoosingComp from './../ChoosingComp/ChoosingComp'
import './Header.css'
export default function Header() {
    return (
        <div className="header">
            <div className="topHeader">
                <div className="mainMenu">
                    <a href="/" className='logoTitle' >Panto</a>
                    <ul className='menuItems'>
                        <li className='item'>Furniture ▼</li>
                        <li className='item'>Shop</li>
                        <li className='item'>About Us</li>
                        <li className='item'>Contact</li>
                    </ul>
                    <div className='bagSetup'>
                        <FaShoppingBag className='icon' />
                        <span className='bagCount'>0</span>
                    </div>
                </div>
                <div className="title">
                    <h1 className='titleHeader'>Make Your Interior More<br />Minimalistic & Modern</h1>
                </div>
                <div className="subTitle">
                    <p>Turn your room with panto into a lot more minimalist<br />and modern with ease and speed</p>
                </div>
                <div className="serachInput">
                    <input type="text" placeholder='Search furniture..' />
                    <button className='searchBtn'><RiSearchLine className='searchIcon' /></button>
                </div>
            </div>
            <div className="bottomHeader">
                <p className='chooseTitle'>
                    <span>Why</span>
                    <span>Choosing Us</span>
                </p>
                <ChoosingComp title="Luxury facilities" desc="The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities." />
                <ChoosingComp title="Affordable Price" desc="You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here." />
                <ChoosingComp title="Many Choices" desc="We provide many unique work space choices so that you can choose the workspace to your liking." />

            </div>
        </div>
    )
}
