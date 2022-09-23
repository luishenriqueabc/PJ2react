import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return(
            <div className="Menu">
                <div className="Logo">
                    <p onClick={() => navigate('/Home')}>LH</p><h1 onClick={() => navigate('/Home')}>LUCROS</h1>
                </div>
                <div className="Tittle">
                    <li onClick={() => navigate('/Home')}>Home</li>
                    <li>Sobre</li>
                </div>
            </div>
    );
};
export default Header;