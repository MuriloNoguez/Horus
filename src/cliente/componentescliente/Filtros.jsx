
export function Filtros ({ filtro, setFiltro})  {

    return (
        <>
            <form class="bg-c-Azul border-b-[0.5px] border-c-creme col-start-2 md:flex md:justify-around hidden ">
                <select name="Esporte" id="" className="bg-transparent border-c-creme border-2 rounded-md text-c-creme h-[2.125rem]">
                    <option value="Esporte">Esporte</option>
                    <option value="corrida">Corrida</option>
                    <option value="caminhada">Caminhada</option>
                    <option value="Ciclismo">Ciclismo</option>
                </select>
                <select name="Local" id="" className="bg-transparent border-c-creme border-2 rounded-md text-c-creme h-[2.125rem]">
                    <option value="Local">Local</option>
                    <option value="Parque">Areal</option>
                    <option value="Praça">Centro</option>
                    <option value="Clube">Tres Vendas</option>
                </select>
                <input type="date" name="Data" id="" className="bg-transparent border-c-creme border-2 rounded-md text-c-creme h-[2.125rem] "/>
                <select name="Distancia" id="" className="bg-transparent border-c-creme border-2 rounded-md text-c-creme h-[2.125rem]">
                    <option value="Distancia">Distancia</option>
                    <option value="5">5km</option>
                    <option value="10">10km</option>
                    <option value="15">15km</option>
                </select>
            </form>
        </>
        
    );
}
