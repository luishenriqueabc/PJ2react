import {useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert';
import './Edit.css'

const Edit = () => {
   
    const { produtoId } = useParams()
    const [produto, setProduto] = useState()
    const Navigate = useNavigate()
  

    useEffect(() => {
        fetch("http://localhost/pj2/api/produto/select-by-id/?id=" + produtoId)
            .then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error(response.statusText);
            })
            .then((data) => setProduto(data))
            .catch((error) => {
                console.log(error);
            })
    }, [produtoId]);
    
    
  

    const handleSubmit = (event) => {
        event.preventDefault()

        let nome = event.target[0].value
        let quantidade = event.target[1].value
        let preco = event.target[2].value
        let investimento = event.target[3].value
        
        let valorTotalEdit = quantidade * preco
        let calculoLucroEdit = valorTotalEdit - investimento

      
        const formData = new FormData()
        formData.append('id', produtoId)
        formData.append('nome', nome)
        formData.append('quantidade', quantidade)
        formData.append('preco', investimento)
        formData.append('investimento', preco)

    
        formData.append('lucro', valorTotalEdit);
        formData.append('valortotal',calculoLucroEdit);
        fetch(
            "http://localhost/pj2/api/produto/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.produto?.id){
                    swal({
                        title: "Editado",
                        icon: "success",
                        button: "Ok!",
                      });
                    Navigate('/Contas');
                    //setProduto(clearprodutoValue)
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
            })
    }
    
    return (
        <>
        {produto ? (
            <div className='Bg'>
            <form className='FormularioEdit' onSubmit={(event) => handleSubmit(event)}>
                <h1 className='EditarH1'>Editar Produto</h1>
            <h2 className='NomeEdit' >Nome</h2>
            <input id='Inputer' type="text" name="nome" defaultValue={produto.nome}  />
            <h2 className='QuantidadeEdit'>Quantidade</h2>
            <input id='Inputer' type="text" name="quantidade"   defaultValue={produto.quantidade}/>
            <h2 className='PrecoEdit'>Preço</h2>
            <input id='Inputer' type="text" name="preco"   defaultValue={produto.preco} />
            <h2 className='InvestimentoEdit'>Investimento</h2>
            <input id='Inputer' type="text" name="investimento"  defaultValue={produto.investimento} />
            <div className='BotaoEdit'>
                <input id='Inputer'type="submit" value='Editar'  />
            </div>
            </form>
            </div>
            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )
}
export default Edit;