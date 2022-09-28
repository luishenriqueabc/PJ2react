import {useRef, useState} from 'react'
import './PaginaContas.css';

const Contas = () => {

const [lucro, setLucro] = useState()

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

    let mensage = `O ${nome}, teve ${calculoLucro} de Lucro`

    console.log(mensage)

    setLucro(calculoLucro)

    const formData = new FormData();
    formData.append('nome', event.target[0].value);
    formData.append('quantidade', event.target[1].value);
    formData.append('preco', event.target[2].value);
    formData.append('investimento', event.target[3].value);
    formData.append('lucro', calculoLucro);

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
    <div className="Formulario">
     <h1>Cálculo de Lucros</h1>
     <form onSubmit={(event) => handleSubmit(event)}>
      <input placeholder='Nome' id='nome' type="text" ref={nomeRef}/>
      <input placeholder='Quantidade' id='quant' type="number" ref={quantidadeRef}/>
      <input placeholder='Valor Sugerido' id='valor' type="text" ref={precoRef}/>
      <input placeholder='Investimento' id='invest' type="text" ref={investimentoRef}/>
      <input placeholder='Calcular' type="submit" id='btn'/>
     </form>
      <p>Lucro: {lucro}</p>
      
    </div>
  );
}
export default Contas;