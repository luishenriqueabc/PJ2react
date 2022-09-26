import './LandiPage.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const LandiPage = () =>{
    const Navigate = useNavigate()
    return(
        <>
        <div className="Tudo">
            <div className="Esquerdo">
                <h1>Sistema de Lucros</h1>
                <p>Feito para comerciantes com intuito de facilitar o processo de contabilidade entre investimentos e lucros.</p>
        <>
        <div className="mb-2">
            <Button  onClick={() => Navigate('/Contas')} variant="danger" size="lg">
            Testar
            </Button >{' '}
        </div>
        </>
        </div>
            <div className="Direito">
                <h1>Como funciona?</h1>
                <p> O usúario deve passar o quanto ele investiu, qual foi o produto a quantidade de produto e o preço que será vendido.</p>
               <h2>O sistema retornará o lucro.</h2>
            </div>
        </div>
        </>
    )
};
export default LandiPage;