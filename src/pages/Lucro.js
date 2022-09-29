import { useState } from "react"


const LucroMensal = () =>{
    const [lucro, setLucroMensal] = useState();

    let nomeRef = useRef();

    const handleSubmit = (event) => {

      event.preventDefault()

      let valormensal = event.target[0].value

  
      let valorTotal = quantidade * preco
      let calculoLucro = valorTotal - investimento
      
      let mensage = `O ${nome}, teve ${calculoLucro} de Lucro`

      let Decimais = calculoLucro.toLocaleString('pt-BR')
  
      console.log(mensage)
      
      setLucro(Decimais)
  
      const formData = new FormData();

      formData.append('nome', calculomensal);
  
      fetch(
        "http://localhost/pj2/api/lucromensal/create",
        {
          method: 'POST',
          body: formData,  
        }
        )
        .then((response) => response.json())
        .then((data) => {
          nomeRef.current.value = ''
          alert(data.message)
        });
    }
    return(
<></>
    )
}
export default LucroMensal;