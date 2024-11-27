import { Cabecalho } from "./componentescliente/cabecalho"
import { Lista } from "./componentescliente/Lista"


function Clientes() {
  return (
    <>
<div class="grid md:grid-cols-12 h-screen ">
  
<Cabecalho />

{/* <Filtros /> */}

<Lista />
</div>



    </>
  )
}

export default Clientes
