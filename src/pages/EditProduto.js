import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProdutoEdit = () => {
    
    const { produtoId } = useParams()
    const [produto, setProduto] = useState()


    useEffect(() => {
        fetch("http://localhost/pj2/api/produto/select-by-id/?id=" + produtoId )
        .then((response) => response.json())
        .then((data) => setProduto(data))
      }, [produtoId])

return(
    <>
    {produto && (
        <>
<div key={produto.id}>

<p>{produto.nome}</p>     

<p>{produto.quantidade}</p>     

<p>{produto.preco}</p>     

<p>{produto.investimento}</p>     

</div>
</>
  )
}
</>
)
}
export default ProdutoEdit;