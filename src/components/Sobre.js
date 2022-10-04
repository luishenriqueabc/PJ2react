import './Sobre.css';
import {ImStatsDots} from 'react-icons/im'
import Button from 'react-bootstrap/esm/Button';


const Sobre = () =>{
    return(
        <>
        <>
<div className="Sobre">
    <h1>Sobre</h1>
</div>
<div className="Creditos">
    <h2> Criador</h2>
    <h2>Contatos</h2>
</div>
        </>
        <>
<div className="Cards">
    <div className="card__giratorio">
        <div className="card__giratorio-conteudo">
            <div className="card__giratorio-conteudo--frente">
                <p><ImStatsDots/></p>
            </div>
            <div className="card__giratorio-conteudo--traseira">
        <h1>Luis Henrique</h1>
        <p>Progamador Web e Mobile.</p>
        <p>Gestor.</p>
            </div>
        </div>
    </div>

    <div className="card__giratorio">
        <div className="card__giratorio-conteudo">
            <div className="card__giratorio-conteudo--frente">
                <p><ImStatsDots/></p>
            </div>
            <div className="card__giratorio-conteudo--traseira">
            <div className="mb-2 pb-1 pt-3 justify-content-around">
            <Button variant="dark" size="lg">
            Linkdin
            </Button>{' '}
            </div>
            <div className="mb-2 pb-2">
            <Button variant="dark" size="lg">
            Github
            </Button>{' '}
            </div>
            <div className="mb-2 pb-2">
            <Button variant="dark" size="lg">
            Gmail
            </Button>{' '}
            </div>
        
            </div>
        </div>
    </div>
</div>
        </>
        </>
    );
};
export default Sobre;