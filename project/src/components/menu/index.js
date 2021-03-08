import React from 'react'
import "./menu.css"
import { Link } from 'react-scroll'


export default function Menu(){

    return(
        <div className="container-menu">
            <nav>
                <div>
                    <span></span>
                    <ul>
                            <li><Link smooth={true} to="section-product" className="a">PRODUCT</Link></li>
                            <li><Link smooth={true} to="section-feature" className="a">FEATURES</Link></li>
                            <li><Link smooth={true} to="section-reviews" className="a">REVIEWS</Link></li>
                            <li><Link smooth={true} to="section-contact" className="a">CONTACT</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}