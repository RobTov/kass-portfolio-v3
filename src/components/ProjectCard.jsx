import Tilt from 'react-tilt';

const ProjectCard = ({ img, title, description, reversed }) => {
    return (
        <Tilt 
        className={`project-card ${reversed && "reversed"}`}
        
        >
            {/* <div className={`project-card ${reversed && "reversed"}`}> */}
            <div className="left-side">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="show-more-btn">Ver Más</button>
            </div>
            <div className="right-side">
                    <img className={`project-img ${reversed && "reversed-img"}`} src={img} alt={img}/>
            </div>
            {/* </div> */}

        </Tilt>
    )
}

export default ProjectCard;
