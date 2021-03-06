import React, { useState } from 'react'
import "./menu.css"
import { Link } from 'react-scroll'
import { MdMenu, MdClose } from 'react-icons/md'
import '../menu/scripts'




export default function Menu(){

    return(
        <div className="container-menu">
            <nav>
                <label for="toggle" id="label-toggle">&#9776;</label>
                <input type="checkbox" id="toggle"></input>
                <ul className="menu">
                    <li><Link smooth={true} to="section-product" className="a">PRODUCT</Link></li>
                    <li><Link smooth={true} to="section-feature" className="a">FEATURES</Link></li>
                    <li><Link smooth={true} to="section-reviews" className="a">REVIEWS</Link></li>
                    <li><Link smooth={true} to="section-contact" className="a">CONTACT</Link></li>
                </ul>              
            </nav>
        </div>

    );
}