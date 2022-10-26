import './Planilha.css';
import { useState,useEffect } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useRef} from 'react'



const Planilha = () => {
    const [produto, setProduto] = useState(null);
    const Navigate = useNavigate()



  // expected output: 10

  //  {Object.values().map((produto) => {
  //   var lucroTotal = 0;
  
    // for (let i = 0; i < produto.length; i++) {
    //   lucroTotal += produto[i].quantidade * produto[i].preco - produto[i].investimento ;
    // }
  
  //   return (
  //       <p>TotalLLL: {lucroTotal}</p>
  //   );
  // })}
// 




let mensage = `O ${nome}, teve um valor total de R$${valorTotal}  e um lucro de R$${calculoLucro}`
// Tranformando números em decimais
let Decimais = calculoLucro.toLocaleString('pt-BR')
let EmReais =  valorTotal.toLocaleString('pt-BR')

console.log(mensage)
//Atualizando Valores e mostrando na tela.
setLucro(Decimais)
setValor(EmReais)

    useEffect(() => {
      fetch("http://localhost/pj2/api/produto/select-all")
      .then((response) => response.json())
      .then((data) => setProduto(data));   
    }, []);
   
      function confirmAction(produtoId) {
        swal({
            title: "Tem Certeza?",
            text: "Você não terá essa Informação de volta!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {

              const formData = new FormData();
              formData.append('id', produtoId);
              const urlDelete = "http://localhost/pj2/api/produto/delete";
              fetch(urlDelete, {
              method: 'POST',
              body: formData
              })
              .then((response) => response.json())
              .then((data) => {
            
              let produtoFiltered = produto.filter(function(produto){ 
              return produto.id !== produtoId;
              });
              setProduto(produtoFiltered)
              });
              swal("Deletado com sucesso!", {
                icon: "success",
              });
            } else {
                  swal("Cancelado!");
          }
        });
      }
      
    return (
    <>
      {produto &&
      produto.map((produto) => {
        if(produto.lucro > 0){
      
        } else{
          return ""
        }
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
              <div className="Quantidade">
                  <h2>QUANTIDADE</h2>
                  <h4>{produto.quantidade}</h4>
                </div>
              <div className="Preço">
                  <h2>PREÇO</h2>
                  <h4>R$ {produto.preco}</h4>
              </div>
              <div className="Investimento">
                  <h2>INVESTIMENTO</h2>
                  <h4>R$  {produto.investimento}</h4>
              </div>
              <div className="ValorTotal">
                  <h2>RETORNO TOTAL</h2>
                 <h4>R$ {produto.valortotal}</h4>
              </div>
              <div className="Lucro">
                  <h2>LUCRO</h2>
                  <h4>R$ {produto.lucro}</h4>
                  <button className='Delete' onClick={() => confirmAction(produto.id)}>Deletar</button>
                  <button onClick={() => Navigate('/Edit/' + produto.id)}> Edit </button>
                  
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
