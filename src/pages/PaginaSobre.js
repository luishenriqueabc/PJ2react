import { useNavigate } from 'react-router-dom';
import Sobre from '../components/Sobre';
import './PaginaSobre.css';
import {BiArrowBack} from 'react-icons/bi';

const PaginaSobre = () =>{
    const Navigate = useNavigate();
    return(
        <>
        <div className="Voltar">
        <p onClick={() => Navigate('/Home')}><BiArrowBack /></p>
        </div>
     <Sobre />
        </>
    );
};
export default PaginaSobre;
