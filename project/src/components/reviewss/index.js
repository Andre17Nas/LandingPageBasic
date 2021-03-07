import { BuyButton } from '../styled_components/global'
import './reviewss.css'
import { FaQuoteLeft } from 'react-icons/fa'

export default function Reviewss(){
    return(
        <div className="container-reviews" id="section-reviews">
            <div className="title">
                <h1>REVIEWS</h1>
                <p>Le Lorem Ipsum est simplement du faux texte employé dans 
                la composition et la mise en page avant impression.</p>
            </div>
            <div>
                <div className="desc-reviews">
                    <FaQuoteLeft size={50} id="item-quote"/>
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans 
                la composition et la mise en page avant impression.</p>
                </div>

                <div className="desc-reviews">
                    <FaQuoteLeft size={50} id="item-quote"/>
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans 
                la composition et la mise en page avant impression.</p>
                </div>

                <div className="desc-reviews">
                    <FaQuoteLeft size={50} id="item-quote"/>
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans 
                la composition et la mise en page avant impression.</p>
                </div>

            </div>
            <BuyButton>I WANT BUY NOW</BuyButton>
        </div>
    );
}