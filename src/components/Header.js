import { Link } from 'react-router-dom';
import Buscador from './Buscador';
import AnimacionHome from './AnimacionHome';

function Header() {
    return (
        <>
        <header>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fw-bold" href="/">Trending Movies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link  className="nav-link text-white " aria-current="page" to='/'>Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link text-white" to='/listado'>Listado</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link text-white" to='/contacto'>Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Buscador />
            </nav>
        </header>
        <AnimacionHome /> 
        </>
        
    )

};



export default Header;

