import { Routes, Route} from 'react-router-dom';
import PaginaHome from './pages/PaginaHome';


const Routers = () =>{
    return(
        <Routes>
            <Route path="/" element={<PaginaHome />} />
            <Route path="Home" element={<PaginaHome />} />
        </Routes>
    );
};

export default Routers;