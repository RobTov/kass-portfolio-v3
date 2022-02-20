import { useContext } from 'react';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import ContactForm from './ContactForm';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import IntersectionContext from '../context/IntersectionContext';

const Contact = () => {
    const [ containerRef, isVisible ] = useIntersectionObserver({
        root: null, 
        threshold: .5
    })

    const {setObservedItem} = useContext(IntersectionContext);

    if (isVisible) setObservedItem('contact');

    return (
        <div className="contact" id="contact" ref={containerRef}>
            <h2 className="contact-title">Contácteme</h2>
            <div className="contact-container">
                <div className="media-contact-container">
                    <Link className="media-link" to="https://gmail.com" target="_blank" rel="noreferrer"><AiOutlineMail />  kissukass@gmail.com</Link>
                    <Link className="media-link" to="https://gmail.com" target="_blank" rel="noreferrer"><AiOutlineWhatsApp /></Link>
                    <Link className="media-link" to="" target="_blank" rel="noreferrer"><FiFacebook /></Link>
                    <Link className="media-link" to="" target="_blank" rel="noreferrer"><BsInstagram /></Link>
                    
                </div>
                <div className="form-container">
                    <ContactForm />
                </div>
            </div>
            <a href="#home"><AiOutlineArrowUp className="arrow-up"/></a>
        </div>
    )
}

export default Contact;
