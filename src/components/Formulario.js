
import {useRef,useEffect} from 'react';
import { Placeholder } from 'react-bootstrap';


const Formulario = ({produto, setProduto}) => {
    const nomeRef = useRef();
    const quantidadeRef = useRef();
    const investimentoRef = useRef();
    const precoRef = useRef();

    useEffect(() => {
        nomeRef.current.focus()
      },[])

    const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('nome', event.target[0].value);
    formData.append('quantidade', event.target[1].value);
    formData.append('investimento', event.target[2].value)
    formData.append('preco', event.target[3].value);
    fetch(
        "http://localhost/api/produto/create",
        {method: 'POST', body: formData}
        )
        .then((response) => response.json())
        .then((data) => {
          nomeRef.current.value = ''
          quantidadeRef.current.value = ''
          investimentoRef.current.value = ''
          precoRef.current.value = ''
          nomeRef.current.focus()
          alert(data.message)
          setProduto([data.produto, ...produto])
        });
    } 

    return(

    <form className='Formulario' onSubmit={(event) => handleSubmit(event)}>
    <input placeholder='Nome do Produto:' ref={nomeRef} type="text" name="nome"/>
    <input placeholder='Quantidade do Produto:' ref={quantidadeRef} type="text" name="quantidade"/>
    <input placeholder='Valor do Investimento:' ref={investimentoRef} type="text" name="investimento"/>
    <input placeholder='Preço a ser vendido:' ref={precoRef} type="text" name="preco"/>
    <input type="submit" value="Enviar"  style={{cursor: 'pointer',  color:'white',backgroundColor:'black'}}/>
    </form>

    );
};
export default Formulario;