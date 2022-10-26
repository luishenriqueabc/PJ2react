import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    const { produtoId } = useParams()
    const [produto, setProduto] = useState()
    const Navigate = useNavigate()
    // const navigate = useNavigate()

    // const clearprodutoValue = {
    //     name: '',
    //     email: '',
    //     pass: ''
    // }

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
        const formData = new FormData()
        formData.append('id', produtoId)
        formData.append('nome', event.target[0].value)
        formData.append('quantidade', event.target[1].value)
        formData.append('preco', event.target[2].value)
        formData.append('investimento', event.target[3].value)
        
        fetch(
            "http://localhost/pj2/api/produto/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.produto?.id){
                    Navigate('/Contas');
                    //setProduto(clearprodutoValue)
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
            })
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setProduto({...produto, [name]: value})
    } 
  
    return (
        <>
        {produto ? (
                   <form className='a' onSubmit={(event) => handleSubmit(event)}>
                   <input type="text" name="nome" value={produto.nome} onChange={handleChange} />
                   <input type="text" name="quantidade"  value={produto.quantidade} onChange={handleChange} />
                   <input type="text" name="preco" value={produto.preco} onChange={handleChange} />
                   <input type="text" name="investimento" value={produto.investimento} onChange={handleChange} />
                    <input type="submit" value="Editar" />
                    </form>
            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )
}
export default Edit;