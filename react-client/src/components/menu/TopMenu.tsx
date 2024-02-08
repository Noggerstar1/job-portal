import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TopMenu = () => {

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand ms-5" to="/">Pracovní portál</Link>


                <div className="navbar-collapse me-5" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link me-3" to="/nabidky">Nabídky</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-3" to="/pridat-nabidku">Přidat nabídku</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
