import { useState } from "react";
import { Itempubli } from "./ItemPublic";

function publics(){
    const [publis, setPublis] = useState ([])

    useEffect(() => {
        async function getPublis(){
            const response = await fetch('https://localhost:3000/publis')
            const publis2 = await response.json()
            setPublis(publis2)
        }
        getPublis()
        })
    
    const listarPublis = publis.map(publi => (
        <Itempubli
        key={publi.id}
        publi={publi}
        publis={publis}
        setPublis={setPublis}/>
    ))

    return(
        {listarPublis}
    )
}