import React from 'react'
import "./header.css"
/* styled components */
import {BuyButton} from '../styled_components/global'

export default function Header(){
   return(
       <>   
        <header>     
            <div className="container">
                <h1>LANDING PAGE</h1>
                <span>FOR YOUR PRODUCT</span>
                <BuyButton id="on">BUY NOW</BuyButton>
            </div>
       </header>
       </>
   ); 
}