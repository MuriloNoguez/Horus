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
        <>
            <form onSubmit={handleSubmit(incluirPubli)}>
                    <div>

                        {/* projeto futuro */}

                        {/* <label htmlFor="foto" >foto</label>
                        <input type="file" id="foto" required {...register("foto")} />*/}
                
                
                        <label htmlFor="esporte" >esporte</label>
                        <input type="text" id="eporte" required {...register("esporte")} />
                
                        <label htmlFor="local" >local</label>
                        <input type="text" id="local" required {...register("local")} />
                
                        <label htmlFor="vagas" >vagas</label>
                        <input type= "number" id="vagas" required {...register("vagas")} />

                        <label htmlFor="data" >data</label>
                        <input type= "date" id="data" required {...register("data")} />

                        <label htmlFor="hora" >hora</label>
                        <input type= "time" id="hora" required {...register("hora")} />
                        
                        <label htmlFor="distancia" >distancia</label>
                        <input type= "text" id="distancia" required {...register("distancia")} />
                    <div>
                        <input type="submit" value="Incluir" className="h-[4.0625rem] w-[19.3125rem] text-[2rem] bg-[#407241] text-white rounded-2xl mt-6"/>
                    </div>                
                </div>
            </form>
        </>
    )

}