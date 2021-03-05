import React from 'react'
import "./menu.css"

export default function Menu(){
    return(
        <div className="container-menu">
            <nav>
            <span>André Nas</span>
                <ul>
                    <li>PRODUCT</li>
                    <li>FEATURES</li>
                    <li>REVIEWS</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>
    );
}