import { IntersectionProvider } from '../context/IntersectionContext';
import { About, Contact, Intro, Projects} from './';

const Main = () => {
    return (
        <IntersectionProvider>
            <Intro />   
            <About />
            <Projects />
            <Contact />
        </IntersectionProvider>
    )
}

export default Main;
