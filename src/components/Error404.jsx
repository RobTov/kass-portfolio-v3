import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="error-container">
            <h2 className="error-message">No existe esta dirección :(</h2>
            <Link className="back-error-btn" to="/">Regresar</Link>
        </div>
    )
}

export default Error404
