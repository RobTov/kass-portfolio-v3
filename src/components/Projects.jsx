import { useContext, useEffect } from "react";
import ProjectCard from './ProjectCard';
import project1 from '../assets/images/projects/test4.jpg';
import project2 from '../assets/images/projects/test5.jpg';
import project3 from '../assets/images/projects/test6.jpg';

import IntersectionContext from '../context/IntersectionContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects = () => {
    const [ containerRef, isVisible ] = useIntersectionObserver({
        threshold: .3
    });
    const { observedItem, setObservedItem } = useContext(IntersectionContext);

    useEffect(() => {
        if (isVisible) {
            setObservedItem('projects');
        };
    }, [observedItem, isVisible]);

    
    const title1 = "Casa Moderna";
    const description1 = "Lorem ipsum dolor sit amet et delir";

    const title2 = "Casa Modernisima";

    const title3 = "Casa Ultramoderna";

    return (
        <div className="projects" id={"projects"}>
            <h2 className="projects-title">Mis Proyectos</h2>
            <div className="projects-container" ref={containerRef}>
                <ProjectCard id={1} title={title1} img={project1} description={description1} />
                <ProjectCard id={2} title={title2} img={project2} description={description1} reversed={true}/>
                <ProjectCard id={3} title={title3} img={project3} description={description1} />
            </div>
        </div>
    )
}

export default Projects;
