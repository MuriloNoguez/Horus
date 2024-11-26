import { Cabecalho } from "./componentescliente/cabecalho"
import { Filtros } from "./componentescliente/Filtro"
import { Lista } from "./componentescliente/Lista"


function Clientes() {
  return (
    <>
      <div>
        <Cabecalho/>
      </div>
      <div>
        <Lista/>
      </div>
      <div>
        <Filtros/>
      </div>
    </>
  )
}

export default Clientes
