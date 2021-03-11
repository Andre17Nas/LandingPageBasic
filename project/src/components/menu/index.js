import React, { useState } from 'react'
import "./menu.css"
import { Link } from 'react-scroll'
import { MdMenu, MdClose } from 'react-icons/md'
import '../menu/scripts'




export default function Menu(){
    /* usando aqui para teste*/
    const show_menu = document.querySelector(".container-menu nav div #ul")
    const [active, setActive] = useState(true);

    function show(){
        //e.preventDefault();

        (active)? show_menu.setAttribute("style", "display: block")
                :
                    show_menu.setAttribute("style", "display: none")
    }
 
    return(
        <div className="container-menu">
            <nav>
                <div>
                    <button id="btn-toogle">
                    { (active)?
                        <MdMenu size={30} className="menu-burger">
                        {
                            onclick = ()=>{(active)?setActive(false):setActive(true)    
                                show()  
                            }}
                    </MdMenu> 
                    :
                    <MdClose size={30}>
                    {
                         onclick = ()=>{
                            (active)?setActive(false):setActive(true)
                            show()
                        }}
                    </MdClose>
                     }
                    </button>
                    <ul id="ul">
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