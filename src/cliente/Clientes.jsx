import { Cabecalho } from "./componentescliente/cabecalho"
import { Filtros } from "./componentescliente/Filtros"
import { Lista } from "./componentescliente/Lista"


function Clientes() {
  return (
    <>
<div class="grid grid-cols-12 h-screen ">
  
<Cabecalho />

{/* <Filtros /> */}

<Lista />
</div>



    </>
  )
}

export default Clientes
