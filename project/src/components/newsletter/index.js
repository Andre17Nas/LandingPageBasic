import './newsletter.css'
import {MdSend} from 'react-icons/md'

export default function Newsletter(){
    return(
        <div className="container-newsletter" id="section-newsletter">
            <div>
                <h1>NEWSLETTER</h1>
                <p>Le Lorem Ipsum est simplement du faux texte employé dans 
                la composition et la mise en page avant impression.</p>
            </div>
            <form>
                <input type="email" placeholder="type your best email"/>
                <button>
                    <MdSend size={25}/>
                </button>
            </form>
        </div>
    );
}