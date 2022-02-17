import Kass from '../assets/images/kissu-guapa-removebg.png';
import { useState, useEffect } from 'react';

import { CgMouse } from 'react-icons/cg';
import { AiOutlineHome } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';

const Intro = () => {
    const [contact, setContact] = useState(JSON.parse(localStorage.getItem('contact')));

    useEffect(() => {
        window.addEventListener('storage', () => {
            setContact(JSON.parse(localStorage.getItem('contact') || false));
            console.log(contact)
        });
    }, [])


    return (
        <>
        <div className="intro" id="home">
            <div className="left-side">
                <h1 className="intro-title text-gradient">Kassandra Romanillo</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Arquitecto</div>
                        <div className="i-title-item">Diseñadora</div>
                        <div className="i-title-item">Decoradora</div>
                    </div>
                </div>
            </div>
            <CgMouse className="mouse-scroll"/>


            <div className="r-side">
                <div className="img-bg"></div>
                <img className="intro-img" src={Kass} alt="kass"/>
            </div>

        </div>
        <div className={`bottom-nav-bar ${contact && "hidden-nav"}`}>
            <div className="nav-bar-container">
                <a className="nav-item" href="/#home"><AiOutlineHome /></a>
                <a className="nav-item" href="/#about"><MdPersonOutline/></a>
                <a className="nav-item" href="/#projects"><BiShoppingBag/></a>
                <a className={`nav-item`} href="/#contact"><AiOutlineMail/></a>
            </div>
        </div>
        </>
    )
}

export default Intro;
