import { Cabecalho } from "./componentescliente/cabecalho"
import { Itempubli } from "./componentescliente/ItemPublic"

function Clientes() {
  return (
    <>
      <main className="min-h-screen flex md:flex-row  bg-c-Azul">
        {/* Sidebar fixa */}
        <div className="md:w-[15.5625rem] md:border-r-2 border-c-creme p-5 fixed md:relative  left-0 right-0 bottom-0 bg-c-Azul">
          <Cabecalho />
        </div>

        {/* Conteúdo principal */}
        <div className="p-5 text-c-creme grid md:grid-cols-3 grid-cols-1 gap-16 bg-c-Azul ">
          <Itempubli />
        </div>
      </main>
    </>
  )
}

export default Clientes
