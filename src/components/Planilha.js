
import './Planilha.css';

import { useState,useEffect } from 'react';




const Planilha = () => {
    const [produto, setProduto] = useState(null);
 
    useEffect(() => {
      fetch("http://localhost/pj2/api/produto/select-all")
      .then((response) => response.json())
      .then((data) => setProduto(data));   
    }, []);

    const handleTrashClick = (produtoId) => {
      const formData = new FormData();
      formData.append('id', produtoId);
      const urlDelete = "http://localhost/pj2/api/produto/delete";
      fetch(urlDelete, {
      method: 'POST',
      body: formData
      })
      .then((response) => response.json())
      .then((data) => {
      alert(data.message)
      let produtoFiltered = produto.filter(function(produto){ 
      return produto.id !== produtoId;
      });
      setProduto(produtoFiltered)
      });
      }
  
    
    
    return (
    <>
    {produto &&
   produto.map((produto) => {
    return (
      <>
      
      <div className="Produtos">
        <h1>Produto</h1>
        </div>
        <div className='Flex'>
      <div className='Flex' key={produto.id}>

      <div className="Name">
        <h2>NOME</h2>
        <h4 to>{produto.nome}</h4>

      </div>

      <div className="Quantidade" id='1'>
      <h2>QUANTIDADE</h2>
        <h4>{produto.quantidade}</h4>
        
        </div>

        <div className="Preço" id='2'>
        <h2>PREÇO</h2>
        <h4>R$ {produto.preco}</h4>
        
        </div>

        <div className="Investimento" id='3'>
        <h2>INVESTIMENTO</h2>
        <h4>R$  {produto.investimento.toLocaleString('pt-BR')}</h4>
        </div>

        <div className="ValorTotal" id='4'>
        <h2>RETORNO TOTAL</h2>
        <h4>R$ {produto.valortotal}</h4>
        
        </div>

        <div className="Lucro" id='5'>
        <h2>LUCRO</h2>
        <h4>R$  {produto.lucro}</h4>
        <button className='Delete' onClick={() => handleTrashClick(produto.id)}>Deletar</button>
        
        </div>
        </div>
        </div>
   
      
       
    
  
      </>
      )
    })
    }
    </>
    )
    }
export default Planilha;
