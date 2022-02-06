import { CgSoftwareDownload } from 'react-icons/cg';
import { SiAutodesk } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiAdobeillustrator } from 'react-icons/si';
import { SiAdobexd } from 'react-icons/si';
import revit from '../assets/images/revit-icon.png';

const About = () => {
    return (
        <div className="about">

            <div className="about-header-cont">
                <h2 className="about-header">Hola! Soy Kassandra Romanillo 🥰, <br />arquitecto, diseñadora <br />y decoradora de interiores.  🏘️</h2>
                <a className="cv-dwn-button" href="src/assets/images/kissu-guapa.jpg" rel="noreferrer" target="_blank">Descargar CV <CgSoftwareDownload className="dwn-icon" /></a>
            </div>

            <div className="about-brief-text">
                <p>Cuento con más de 3 años de experiencia.
                <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Sed repellendus dicta corporis eligendi, blanditiis nam laboriosam animi fuga dolor fugit ullam iure perspiciatis ducimus nobis?
                </p>
            </div>

            <div className="about-resources">
                <h3>Estas son algunas de las técnologías 
                    <br /> y herramientas que manejo:
                </h3>
                <div className="resources-container">
                    <SiAutodesk />
                    <SiAdobephotoshop />
                    <SiAdobeillustrator />
                    <SiAdobexd />
                    {/* <img src={revit} alt=""/> */}

                </div>
            </div>
        </div>
    )
}

export default About;
