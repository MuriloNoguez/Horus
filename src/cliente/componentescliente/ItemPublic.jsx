import { useState } from "react"

export function Itempubli ({ vagas }) {
    const [participantes, setParticipantes] = useState(0)

    function Participar(){
        if (participantes < vagas ){
            setParticipantes (participantes + 1)
        }
    }
return(
    <div>
        
    </div>
)

}