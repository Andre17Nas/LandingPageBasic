import './fotter.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

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
                    <a href="https://www.facebook.com/"><FaFacebook size={60} className="social"/></a>
                    <a href="https://www.twitter.com.br/"><FaTwitter size={60} className="social"/></a>
                    <a href="https://www.instagram.com/"><FaInstagram size={60} className="social"/></a>
                </div>
                <tr></tr>
                <p> Copyright &copy; 2021 - André Nas. Todos os Direitos Reservados</p>
            </footer>
        </div>
    );
}