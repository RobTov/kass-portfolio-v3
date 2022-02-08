import ProjectCard from './ProjectCard';
import project1 from '../assets/images/projects/test4.jpg';
import project2 from '../assets/images/projects/test5.jpg';
import project3 from '../assets/images/projects/test6.jpg';

const Projects = () => {
    const title1 = "Casa Moderna";
    const description1 = "Lorem ipsum dolor sit amet et delir";

    const title2 = "Casa Modernisima";

    const title3 = "Casa Ultramoderna";

    return (
        <div className="projects">
            <h2 className="projects-title">Mis Proyectos</h2>
            <div className="projects-container">
                <ProjectCard title={title1} img={project1} description={description1} />
                <ProjectCard title={title2} img={project2} description={description1} reversed={true}/>
                <ProjectCard title={title3} img={project3} description={description1} />
            </div>
        </div>
    )
}

export default Projects;
