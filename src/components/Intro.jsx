import Kass from '../assets/images/kissu-guapa-removebg.png';
import { Link } from 'react-router-dom';

import { CgMouse } from 'react-icons/cg';
import { AiOutlineHome } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';

const Intro = () => {
    return (
        <>
        <div className="intro">
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
        <div className="bottom-nav-bar">
            <div className="nav-bar-container">
                <Link className="nav-item" to="/"><AiOutlineHome /></Link>
                <Link className="nav-item" to="about"><MdPersonOutline/></Link>
                <Link className="nav-item" to="projects"><BiShoppingBag/></Link>
                <Link className="nav-item" to="contact"><AiOutlineMail/></Link>
            </div>
        </div>
        </>
    )
}

export default Intro;
