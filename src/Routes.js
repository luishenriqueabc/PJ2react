import { Routes, Route} from 'react-router-dom';
import PaginaContas from './pages/PaginaContas';
import PaginaHome from './pages/PaginaHome';
import PaginaSobre from './pages/PaginaSobre';

const Routers = () =>{
    return(
        <Routes>
            <Route path="/" element={<PaginaHome />} />
            <Route path="Home" element={<PaginaHome />} />
            <Route path="Sobre" element={<PaginaSobre />} />
            <Route path="Contas" element={<PaginaContas />} />
        </Routes>
    );
};
export default Routers;