import { useForm } from "react-hook-form";

export function NovaPubli({publis,setPublis}){
    const { register, handleSubmit, reset } = useForm();

    function incluirPubli(data) {
        const novo = {
            foto: data.foto,
            esporte: data.esporte,
            local: data.local,
            vagas: data.vagas,
            data: data.data,
            hora: data.hora,
            distancia: data.distancia,
        }
        const publi2 = [...publis, novo];
        setPublis(publi2);

        fetch ('http://localhost:3000/publis', {
            method: 'POST',
            body: JSON.stringify(novo),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        reset();
    }

    return(
     
            <form onSubmit={handleSubmit(incluirPubli)} className="bg-c-Azul md:min-h-[90vh] md:w-[30rem] w-[20rem]">


                        {/* projeto futuro */}

                        {/* <label htmlFor="foto" >foto</label>
                        <input type="file" id="foto" required {...register("foto")} />*/}
                
                        <div className="flex w-[100%] border-t-c-creme border-b-c-creme border-2 items-center p-2">
                            <img src="public\perfil.png" alt="" className="w-[2.625rem] h-[2.625rem]"/>
                            <input type="text" id="eporte"  required {...register("esporte")} className="bg-transparent font-bold text-c-creme p-5 w-full" placeholder='Esporte'/>
                        </div>
                        <div className="flex w-[100%] border-t-c-creme border-b-c-creme border-2 items-center p-2">
                            <img src="public\perfil.png" alt="" className="w-[2.625rem] h-[2.625rem]"/>
                            <input type="text" id="local" required {...register("local")} className="bg-transparent font-bold text-c-creme p-5" placeholder='Local'/>
                        </div>
                        <div className="flex w-[100%] border-t-c-creme border-b-c-creme border-2 items-center p-2">
                            <img src="public\perfil.png" alt="" className="w-[2.625rem] h-[2.625rem]"/>
                            <input type= "number" id="vagas" required {...register("vagas")} className="bg-transparent font-bold text-c-creme p-5" placeholder='Vagas'/>
                        </div>
                        <div className="flex w-[100%] border-t-c-creme border-b-c-creme border-2 items-center p-2">
                            <img src="public\perfil.png" alt="" className="w-[2.625rem] h-[2.625rem]"/>
                            <input type= "date" id="data" required {...register("data")}  className="bg-transparent font-bold text-c-creme p-5" />
                        </div>
                        <div className="flex w-[100%] border-t-c-creme border-b-c-creme border-2 items-center p-2">
                            <img src="public\perfil.png" alt="" className="w-[2.625rem] h-[2.625rem]"/>
                            <input type= "time" id="hora" required {...register("hora")}   className="bg-transparent font-bold text-c-creme p-5" />
                        </div>
                        <div className="flex w-[100%] border-t-c-creme border-b-c-creme border-2 items-center p-2">
                            <img src="public\perfil.png" alt="" className="w-[2.625rem] h-[2.625rem]"/>
                            <input type= "text" id="distancia" required {...register("distancia")}  className="bg-transparent font-bold text-c-creme p-5" placeholder='Distancia'/>
                        </div>
            
                    <div className="flex justify-center items-center">
                        <input type="submit" value="Incluir" className="h-[3.0625rem] w-[19.3125rem] text-[2rem] bg-c-creme rounded-2xl mt-6 mb-6 text-c-Azul"/>
                    </div>                
            </form>

    )

}