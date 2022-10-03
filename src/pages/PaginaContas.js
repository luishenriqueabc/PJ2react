import './PaginaContas.css';
import { useRef, useState} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';





const Contas = () => {
const [lucro, setLucro] = useState()
const [valortotal, setValor] = useState()

var Calculo = new Array();
 
function cadastrarCalculo(){
    var Calculo = new Array();

    var iValor = document.getElementById('in')
    Calculo.value = iValor.value;
    Calculo.push(Calculo);
    atualizarCalculo();
    iValor.value="";
    
  }
  function atualizarCalculo() {
    var Calculo=0;
    var Valor=0;
    

     for (var index = 0; index < Calculo.length; index++) { 
    
         var Calculo = Calculo[index];
         Valor += parseFloat(Calculo.valor)
     } 
  
     document.getElementById("Soma").innerText=Calculo;
 }


const Navigate = useNavigate();

  let nomeRef = useRef();
  let quantidadeRef = useRef();
  let precoRef = useRef();
  let investimentoRef = useRef();

 

 
  const handleSubmit = (event) => {
    event.preventDefault()


   


    let nome = event.target[0].value
    let quantidade = event.target[1].value
    let preco = event.target[2].value
    let investimento = event.target[3].value

    let valorTotal = quantidade * preco
    let calculoLucro = valorTotal - investimento
  
  
    
    let mensage = `O ${nome}, teve um valor total de R$${valorTotal}  e um lucro de R$${calculoLucro}`
    let Decimais = calculoLucro.toLocaleString('pt-BR')
    let EmReais =  valorTotal.toLocaleString('pt-BR')

  

    console.log(mensage)

    setLucro(Decimais)
    setValor(EmReais)


    const formData = new FormData();
    formData.append('nome', event.target[0].value);
    formData.append('quantidade', event.target[1].value);
    formData.append('preco', event.target[2].value);
    formData.append('investimento', event.target[3].value);
    formData.append('lucro', calculoLucro);
    formData.append('valortotal', valorTotal);

    fetch(
      "http://localhost/pj2/api/produto/create",
      {
        method: 'POST',
        body: formData,  
      }
      )
      .then((response) => response.json())
      .then((data) => {
        nomeRef.current.value = ''
        quantidadeRef.current.value = ''
        precoRef.current.value = ''
        investimentoRef.current.value = ''
        alert(data.message)
      });
  }
  return (
    <>

    <div className="Formulario">
    <div className="VoltarContas">
        <p onClick={() => Navigate('/Home')}><BiArrowBack /></p>
        </div>
     <h1 className='Titulo'>Cálculo de Lucros</h1>

     <div className='Separador'>
      <p className='Cifrao'>R$ <br /><br />
      <spam>R$</spam></p>
      
     <form className="Form" onSubmit={(event) => handleSubmit(event)}>
       <h2 className='Nome' id='nome' >Nome</h2>
      <input id='nome' type="text" ref={nomeRef}/>
      <h2 className='Quant'>Quantidade</h2>
      <input id='quant' type="number" ref={quantidadeRef}/>
      <h2 className='Preco'>Preço</h2>
      <input id='valor' type="text" ref={precoRef}/>
      <h2 className='Invest' id='in'>Investimento</h2>
      <input id='invest' type="text" ref={investimentoRef}/>
      <div className='Botao '>
      <input type="submit" onClick={cadastrarCalculo()} value='Calcular'  />
      </div>
   

     </form>
     <div className='Resultado'>
      <h3>Retorno Total</h3>
      <p>R$ {valortotal}</p>
      <h3>Lucro</h3>
      <p>R$ {lucro}</p>
 
      
      

  

      </div>
      <h3>Lucro</h3>
      <p className='Teste' id='Soma'>00,00</p>
    
     </div>
     
      </div>
      
    </>
  );
}
export default Contas;