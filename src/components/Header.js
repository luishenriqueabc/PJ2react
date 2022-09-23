import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
            <div className="Menu">
                <div className="Logo">
                    <Link to='/Home'> <p>LH</p><h1>LUCROS</h1>
                    </Link>
                </div>
                <div className="Tittle">
                    <li>Home</li>
                    <li>Sobre</li>
                </div>

            </div>

    );
};

export default Header;