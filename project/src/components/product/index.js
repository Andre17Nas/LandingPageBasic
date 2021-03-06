import React from  'react'
import './product.css'

export default function Product(){
    return(
        <div className="container-product" id="section-product">
            <h1>THE PRODUCT</h1>
            <p>Le Lorem Ipsum est simplement du faux texte employé dans 
            la composition et la mise en page avant impression.</p>
            <div className="product"></div>
        </div>
    );
}