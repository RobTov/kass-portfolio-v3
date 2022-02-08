import { Route, Routes } from 'react-router-dom';
import { Main , Error404 } from './components';

const Router = () => {
    return (
        <> 
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </>
    )
}

export default Router;
