import { Cabecalho } from "../cliente/componentescliente/cabecalho"
import { Infoperfil } from "./componentesperfil/InfoPerfil"
import { Publiperfil } from "./componentesperfil/publiPerfil"


function Perfil() {

  return (
    <>
    <div class="min-h-screen flex md:flex-row  bg-c-Azul">
  
    <div className="md:w-[15.5625rem] md:border-r-2 border-c-creme p-5 fixed md:relative  left-0 right-0 bottom-0 bg-c-Azul">
          <Cabecalho />
        </div>
        <div>
        <Infoperfil />
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-5 p-5">
          <Publiperfil />
        </div>
      </div>
     

  </div>
  <div>

  </div>
    </>
  )
}

export default Perfil
