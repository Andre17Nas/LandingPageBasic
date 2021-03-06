import React from 'react'
import "./menu.css"
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom';


export default function Menu(){
    return(
        <BrowserRouter>
            <div className="container-menu">
            <nav>
                <div>
                    <span></span>
                    <ul>
                            <li><HashLink smooth to="#section-product" className="a">PRODUCT</HashLink></li>
                            <li><HashLink smooth to="#section-feature" className="a">FEATURES</HashLink></li>
                            <li><HashLink smooth to="#section-reviews" className="a">REVIEWS</HashLink></li>
                            <li><HashLink smooth to="#section-contact" className="a">CONTACT</HashLink></li>
                    </ul>
                </div>
            </nav>
        </div>
        </BrowserRouter>
    );
}