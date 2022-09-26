import './PaginaContas.css';
import {useState, useEffect} from 'react';
import Formulario from '../components/Formulario';

const PaginaContas = () => {
  const [produto, setproduto] = useState(null);
  useEffect(() => {
  fetch("http://localhost/pj2/api/produto/select-all")
  .then((response) => response.json())
  .then((data) => setproduto(data));        
  }, []);
  return (
  <>
 
  <h1> ADMIN produto</h1>
  <div className="form">
 
  </div>
  <div className='cs'>
  {produto &&
    produto.map((produto) => {
    return (
      <div key={produto.id}>
      <div className='card'>
   
     
      <div className='cardinfo'>
        <div className='nome'>
        <h1>{produto.nome}</h1>
        </div>
        {produto.quantidade} * {produto.quantidade} = 

        </div>
        <div className='pertence'>
        <h3>Pertence a qual cidade?</h3>
        <p>{produto.pertence}</p>
        </div>
        <div className='quantas'>
        <h3>Quantas pessoas vão até lá?</h3>
        <p>{produto.quantaspessoas}</p>
        </div>
        <div className='queriratela'>
        <h3>Quer ir até lá?</h3>
        <div className='Sim'>
        <a href='https://www.decolar.com/pacotes/rio/pacotes-para-rio+de+janeiro?package_id=be8e62e9a1e10324e912bc3b3c22f49988055599591348c7598521b487e110fd&clickedPrice=BRL_1137&priceDate=1655724010474&searchId=d5036125d93c4692a56a44c822aeabe4'> <p>Quero!</p></a>
        </div>
        </div>
        <div className='comentariosss'>
          <h1>Comentarios</h1>
        </div>
    
        </div>
        </div>  
          )
        })
      }
      </div>
     
      </>
    )
  }

export default PaginaContas;