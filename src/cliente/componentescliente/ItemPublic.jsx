import { useState } from "react"

export function Itempubli ({ vagas }) {
    const [participantes, setParticipantes] = useState(0)

    function Participar(){
        if (participantes < vagas ){
            setParticipantes (participantes + 1)
        }
    }
return(
    <>
        <div className="Container || ">
            <div className="flex items-center justify-start w-[23.29356rem] p-1">
                <img src="public\perfil.png" alt="" className="h-[2rem] w-[2rem] rounded-full"/>
                <h3 className="p-3">nome</h3>
            </div>
            <div className=" text-c-creme ">
                <div className="w-[23.29356rem] h-[23.29356rem] rounded-t-[0.5rem]">
                    <img src="public\HeaderBG.png" alt="" className="w-[23.29356rem] h-[23.29356rem] rounded-t-[0.5rem]"/>
                </div>
                
                <div className="bg-c-cinza w-[23.3125rem] h-[10.5625rem] rounded-b-[0.5rem] pt-[1rem]">
                    <div className="flex justify-around text-center p-1">
                        <h3 className="border-2 border-c-creme rounded-lg w-[4.87075rem]">esporte</h3>
                        <h3 className="border-2 border-c-creme rounded-lg w-[4.87075rem]">numParti</h3>
                        <h3 className="border-2 border-c-creme rounded-lg w-[4.87075rem]">Distancia</h3>
                    </div>
                    <div className="flex justify-around text-center  p-1 gap-6">
                        <h3 className="border-2 border-c-creme rounded-lg w-[8rem]">data</h3>
                        <h3 className="border-2 border-c-creme rounded-lg w-[8rem]">Hora</h3>
                    </div>
                    <div className="flex justify-around text-center  p-1">
                        <h3 className="border-2 border-c-creme rounded-lg w-[20.5rem]">local</h3>
                    </div>
                    <div className="flex items-center justify-center p-1">
                        <button className="bg-blue-900 px-8 rounded-md">Participar</button>
                    </div>
                    
                </div>
            </div>
        </div>



    </>
    
)

}