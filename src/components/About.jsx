import { useContext } from 'react';

import { CgSoftwareDownload } from 'react-icons/cg';
import { SiAutodesk } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiAdobeillustrator } from 'react-icons/si';
import { SiAdobexd } from 'react-icons/si';
import revit from '../assets/images/revit-icon.png';

import { Link } from 'react-router-dom';

import IntersectionContext from '../context/IntersectionContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
    const [ containerRef, isVisible ] = useIntersectionObserver({
        threshold: .5
    });
    const { observedItem, setObservedItem } = useContext(IntersectionContext);
    
    if (isVisible) setObservedItem('about');

    return (
        <div className="about" id="about" ref={containerRef}>

            <div className="about-header-cont">
                <h2 className="about-header">Hola! Soy Kassandra Romanillo🥰, <br />arquitecto, diseñadora <br />y decoradora de interiores.🏘️</h2>
                <a className="cv-dwn-button" href="src/assets/images/kissu-guapa.jpg" rel="noreferrer" target="_blank">Descargar CV <CgSoftwareDownload className="dwn-icon" /></a>
            </div>

            <div className="about-brief-text">
                <p>
                Graduada de Arquitectura de la UABC. <br />
                Cuento con más de 3 años de experiencia.
                <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Sed repellendus dicta corporis eligendi, blanditiis nam laboriosam animi fuga dolor fugit ullam iure perspiciatis ducimus nobis?
                </p>
            </div>

            <div className="about-resources">
                <h3>Algunas de las técnologías 
                    <br /> y herramientas que manejo:
                </h3>
                <div className="resources-container">
                    {/* TODO: Fill links */}
                    <Link className="res-icons" to=""><SiAutodesk /></Link>
                    <Link className="res-icons" to=""><SiAdobephotoshop /></Link>
                    <Link className="res-icons" to=""><SiAdobeillustrator /></Link>
                    <Link className="res-icons" to=""><SiAdobexd /></Link>
                    
                    {/* <img src={revit} alt=""/> */}

                </div>
            </div>
        </div>
    )
}

export default About;
