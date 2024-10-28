import React, { useState } from 'react'

import './BestSeller.css'
import { FaArrowRightLong } from 'react-icons/fa6'
export default function BestSeller() {
    const allProducts = [
        { id: 1, category: 'Chair', name: 'Sakarias Armchair', fav: '♥ ♥ ♥', price: 392, img: 'images/sofa (3).png' },
        { id: 2, category: 'Chair', name: 'Baltsar Chair', fav: '♥ ♥ ♥ ♥', price: 299, img: 'images/sofa (4).png' },
        { id: 3, category: 'Chair', name: 'Anjay Chair', fav: '♥ ♥ ♥ ♥ ♥', price: 519, img: 'images/sofa (1).png' },
        { id: 4, category: 'Chair', name: 'Nyantuy Chair', fav: '♥ ♥ ♥', price: 921, img: 'images/sofa (2).png' },
    ]


    return (
        <div className='bestSellerSec'>
            <div className='bestSellerTitle'>Best Selling Product</div>
            <div className="menu">
                <ul className='productMenuUl'>
                    <li className='productSubMenuLi active'>Chair</li>
                    <li className='productSubMenuLi '>Beds</li>
                    <li className='productSubMenuLi '>Sofa</li>
                    <li className='productSubMenuLi '>Lamp</li>
                </ul>
            </div>
            <div className="productsSection">
                {allProducts.length ? (allProducts.map(product => (
                    <div key={product.id} className='product'>
                        <div className='productDevider'>
                            <div className="imgBg">
                                <img src={product.img} height="250px" alt="pic" />
                            </div>
                            <div className="productInfo">
                                <p className='productCategory'>{product.category}</p>
                                <p className="productTitle">{product.name}</p>
                                <span className="star">{product.fav}</span>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="lastDiv">
                                    <span className='productPrice'>$ {product.price}</span>
                                    <button className='addToCartBtn'><span>+</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))) : (
                    <h2>No Product Exist!</h2>
                )}


            </div>
            <span>
                <a href="#" className='viewMoreLink'>View All <FaArrowRightLong /></a>
            </span>
        </div>
    )
}
