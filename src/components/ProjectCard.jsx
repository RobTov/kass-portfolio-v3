import Tilt from 'react-tilt';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, img, title, description, reversed }) => {
    return (
        <Tilt 
        className={`project-card ${reversed && "reversed"}`}
        options={{
            // speed: 200,
            // max: 35,
            // perspective: 500,
            scale: 1.05,
            reverse: true,
            // axis: "x",
            reset: true
        }}
        >
            {/* <div className={`project-card ${reversed && "reversed"}`}> */}
            <div className="left-side">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                    <Link to={`/project/${title}`} className="show-more-btn">Ver Más</Link>
            </div>
            <div className="right-side">
                    <img className={`project-img ${reversed && "reversed-img"}`} src={img} alt={img}/>
            </div>
            {/* </div> */}

        </Tilt>
    )
}

export default ProjectCard;
