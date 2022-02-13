import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h2 className="contact-title">Contácteme</h2>
            <div className="contact-container">
                <div className="media-contact-container">
                    <Link className="media-link" to="https://gmail.com"><AiOutlineMail />  kissukass@gmail.com</Link>
                    <Link className="media-link" to="https://gmail.com"><AiOutlineWhatsApp /></Link>
                    <Link className="media-link" to=""><FiFacebook /></Link>
                    <Link className="media-link" to=""><BsInstagram /></Link>
                    
                </div>
                <div className="form-container">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact;
