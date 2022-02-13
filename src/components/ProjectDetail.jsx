import { useParams, Link } from 'react-router-dom';
import img1 from '../assets/images/projects/test1.jpg';
import img2 from '../assets/images/projects/test2.jpg';
import img3 from '../assets/images/projects/test3.jpg';
import img4 from '../assets/images/projects/test4.jpg';
import img5 from '../assets/images/projects/test5.jpg';

const ProjectDetail = () => {
    let { title } = useParams();

    return (
        <div className="project-detail">
            <Link to="/" className="details-back-btn">Regresar</Link>
            <h2 className="details-title">{title}</h2>
            <img className="details-main-img" src={img2} alt=""/>
        </div>
    )
}

export default ProjectDetail;
