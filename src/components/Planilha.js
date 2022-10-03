
import './Planilha.css';

import { useState,useEffect } from 'react';


const Planilha = () => {
    const [produto, setProduto] = useState(null);
 
    useEffect(() => {
      fetch("http://localhost/pj2/api/produto/select-all")
      .then((response) => response.json())
      .then((data) => setProduto(data));   
    }, []);

    
    return (
    <>
    {produto &&
   produto.map((produto) => {
    return (
    <div className="comment">
    <div key={produto.id}>
      <div className="eme">
      <h1>{produto.quantidade}</h1>
      </div>
      <div className="eme">
      <h1>{produto.preco}</h1>
      </div>
      <div className="eme">
      <h1>{produto.investimento}</h1>
      </div>
      <div className="eme">
      <h1>{produto.lucro}</h1>
      </div>
      <div className="eme">
      <h1>{produto.valortotal}</h1>
      </div>
      
      </div>
      </div>
      )
    })
    }
    </>
    )
    }
export default Planilha;
