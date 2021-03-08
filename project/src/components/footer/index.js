import './fotter.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BuyButton } from '../styled_components/global'

export default function Footer(){
    return(
        <div className="container-footer">

            <div id="section-contact">
            <h1>CONTACT</h1>
            <form>
            <label>Name: </label>
                <input type="text" placeholder="Your Name"/>
            <label>Email: </label>
                <input type="email" placeholder="Your E-mail"/>
            <label>Message: </label>
                <textarea type="text" placeholder="message..."/>
            <button>Send</button>
                </form>
            </div>
        
            <footer>
                <div className="social-links">
                    <FaFacebook size={60} className="social"></FaFacebook>
                    <FaTwitter size={60} className="social"></FaTwitter>
                    <FaInstagram size={60} className="social"></FaInstagram>
                </div>
                <tr></tr>
                <p> Copyright &copy; 2021 - André Nas. Todos os Direitos Reservados</p>
            </footer>
        </div>
    );
}