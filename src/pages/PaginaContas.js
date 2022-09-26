import './PaginaContas.css';
import {useState, useEffect} from 'react';
import Formulario from '../components/Formulario';

const PaginaContas = () => {
    const [produto, setProduto] = useState(null);
    useEffect(() => {
    fetch("http://localhost/pj2/api/produto/select-all")
    .then((response) => response.json())
    .then((data) => setProduto(data));        
    }, [])
    {produto &&
        produto.map((produto) => {
        return (
            <>
              <Formulario />
            </>
           
              )
            })
          };
        }
export default PaginaContas;