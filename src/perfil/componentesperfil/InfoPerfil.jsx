import { Publiperfil } from "./publiPerfil";


export function Infoperfil () {

return(
    <main className="bg-c-Azul text-c-creme  md:col-span-10 w-[100%]">
    <section className=" flex border-b-2 border-c-creme">
        <div className="flex md:w-[46.1875rem] p-10 ">
            <img src="public\perfil.png" alt="" className="md:w-[14.75rem] md:h-[14.75rem] w-[6.25rem] h-[6.25rem] rounded-full"/>
            <div className="p-5">
                <h3 className="md:text-[2rem] font-bold ">nome</h3>
                <p className="md:text-[1.5rem] md:h-[7rem] h-[3]">desc</p>
                <button className="md:w-[11.9375rem] md:h-[2.4375rem] rounded-md border-2 border-c-creme">Editar Perfil</button>           
            </div>
        </div>
    </section>
    </main>
    
)

}