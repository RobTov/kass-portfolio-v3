import { useContext } from 'react';

import { CgSoftwareDownload } from 'react-icons/cg';
import { SiAutodesk } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiAdobeillustrator } from 'react-icons/si';
import { SiAdobexd } from 'react-icons/si';
import { SiAdobeindesign } from 'react-icons/si';
import { SiMicrosoftoffice } from 'react-icons/si';
import { SiSketchup } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';

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
                <a className="cv-dwn-button" href="src/assets/Curriculum_Kassandra.pdf" rel="noreferrer" target="_blank">Descargar CV <CgSoftwareDownload className="dwn-icon" /></a>
            </div>

            <div className="about-brief-text">
                <p>
                Graduada de Arquitectura de la UABC. <br />
                Trilingue y con más de 6 años de experiencia.
                <br /> Proactiva, dinámica y con visión innovadora. <br /> 
                Buena presentación y eficacia garantizadas.
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
                    <Link className="res-icons" to=""><SiAdobeindesign /></Link>
                    <Link className="res-icons" to=""><SiMicrosoftoffice /></Link>
                    <Link className="res-icons" to=""><SiSketchup /></Link>
                    <Link className="res-icons" to=""><SiHtml5 /></Link>
                    <Link className="res-icons" to=""><SiCss3 /></Link>
                    
                    {/* <img src={revit} alt=""/> */}

                </div>
            </div>
        </div>
    )
}

export default About;