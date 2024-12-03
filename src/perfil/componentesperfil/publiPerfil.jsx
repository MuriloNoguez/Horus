import { useEffect, useState } from "react"

export function Publiperfil () {
    const [publicacoes, setPublicacoes] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/publis')
        .then(response => response.json())
            .then(data => {
                setPublicacoes(data);
            })
            .catch(error => {
                console.error("Erro ao buscar publicações:", error);
            });
    }, []);
        
return(
    <>
    {/* {publicacoes.map((publicacao, index) => (*/}
        <div /*</>key={index}*/> 
            <div className=" text-c-creme md:w-[23.29356rem] w-[10.86619rem]">
                <div className="rounded-t-[0.5rem] md:w-[23.29356rem] md:h-[23.29356rem] w-[10.86619rem] h-[10.86619rem] ">
                    <img src="public\HeaderBG.png" alt="" className="rounded-t-[0.5rem] md:w-[23.29356rem] md:h-[23.29356rem] w-[10.86619rem] h-[10.86619rem]"/>
                </div>
                
                <div className="bg-c-cinza rounded-b-[0.5rem] pt-[1rem] md:w-[23.29356rem] md:h-[10.5625rem] w-[10.86619rem] h-[4.92725rem]">
                    <div className="flex justify-around text-center md:p-1 p-[0.1rem]">
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[4.87075rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]  w-[2.125rem]">a</h3>
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[4.87075rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]  w-[2.125rem]">a</h3>
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[4.87075rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]  w-[2.125rem]">a</h3>
                    </div>
                    <div className="flex justify-around text-center  md:p-1 p-[0.1rem] gap-6">
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[8rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem] w-[3.2rem]">a</h3>
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[8rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem] w-[3.2rem]">a</h3>
                    </div>
                    <div className="flex justify-around text-center  md:p-1 p-[0.1rem]">
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[20.5rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem] w-[9.4375rem]">a</h3>
                    </div>
                    <div className="flex items-center justify-center md:p-1 p-[0.1rem]">
                        <button className="bg-blue-900 px-8 rounded-md md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]">Participar</button>
                    </div>
                </div>
            </div>
        </div>
        <div /*</>key={index}*/> 
            <div className=" text-c-creme md:w-[23.29356rem] w-[10.86619rem]">
                <div className="rounded-t-[0.5rem] md:w-[23.29356rem] md:h-[23.29356rem] w-[10.86619rem] h-[10.86619rem] ">
                    <img src="public\HeaderBG.png" alt="" className="rounded-t-[0.5rem] md:w-[23.29356rem] md:h-[23.29356rem] w-[10.86619rem] h-[10.86619rem]"/>
                </div>
                
                <div className="bg-c-cinza rounded-b-[0.5rem] pt-[1rem] md:w-[23.29356rem] md:h-[10.5625rem] w-[10.86619rem] h-[4.92725rem]">
                    <div className="flex justify-around text-center md:p-1 p-[0.1rem]">
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[4.87075rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]  w-[2.125rem]">a</h3>
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[4.87075rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]  w-[2.125rem]">a</h3>
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[4.87075rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]  w-[2.125rem]">a</h3>
                    </div>
                    <div className="flex justify-around text-center  md:p-1 p-[0.1rem] gap-6">
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[8rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem] w-[3.2rem]">a</h3>
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[8rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem] w-[3.2rem]">a</h3>
                    </div>
                    <div className="flex justify-around text-center  md:p-1 p-[0.1rem]">
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[20.5rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem] w-[9.4375rem]">a</h3>
                    </div>
                    <div className="flex items-center justify-center md:p-1 p-[0.1rem]">
                        <button className="bg-blue-900 px-8 rounded-md md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]">Participar</button>
                    </div>
                </div>
            </div>
        </div>
        <div /*</>key={index}*/> 
            <div className=" text-c-creme md:w-[23.29356rem] w-[10.86619rem]">
                <div className="rounded-t-[0.5rem] md:w-[23.29356rem] md:h-[23.29356rem] w-[10.86619rem] h-[10.86619rem] ">
                    <img src="public\HeaderBG.png" alt="" className="rounded-t-[0.5rem] md:w-[23.29356rem] md:h-[23.29356rem] w-[10.86619rem] h-[10.86619rem]"/>
                </div>
                
                <div className="bg-c-cinza rounded-b-[0.5rem] pt-[1rem] md:w-[23.29356rem] md:h-[10.5625rem] w-[10.86619rem] h-[4.92725rem]">
                    <div className="flex justify-around text-center md:p-1 p-[0.1rem]">
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[4.87075rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]  w-[2.125rem]">a</h3>
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[4.87075rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]  w-[2.125rem]">a</h3>
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[4.87075rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]  w-[2.125rem]">a</h3>
                    </div>
                    <div className="flex justify-around text-center  md:p-1 p-[0.1rem] gap-6">
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[8rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem] w-[3.2rem]">a</h3>
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[8rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem] w-[3.2rem]">a</h3>
                    </div>
                    <div className="flex justify-around text-center  md:p-1 p-[0.1rem]">
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[20.5rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem] w-[9.4375rem]">a</h3>
                    </div>
                    <div className="flex items-center justify-center md:p-1 p-[0.1rem]">
                        <button className="bg-blue-900 px-8 rounded-md md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]">Participar</button>
                    </div>
                </div>
            </div>
        </div>
        <div /*</>key={index}*/> 
            <div className=" text-c-creme md:w-[23.29356rem] w-[10.86619rem]">
                <div className="rounded-t-[0.5rem] md:w-[23.29356rem] md:h-[23.29356rem] w-[10.86619rem] h-[10.86619rem] ">
                    <img src="public\HeaderBG.png" alt="" className="rounded-t-[0.5rem] md:w-[23.29356rem] md:h-[23.29356rem] w-[10.86619rem] h-[10.86619rem]"/>
                </div>
                
                <div className="bg-c-cinza rounded-b-[0.5rem] pt-[1rem] md:w-[23.29356rem] md:h-[10.5625rem] w-[10.86619rem] h-[4.92725rem]">
                    <div className="flex justify-around text-center md:p-1 p-[0.1rem]">
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[4.87075rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]  w-[2.125rem]">a</h3>
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[4.87075rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]  w-[2.125rem]">a</h3>
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[4.87075rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]  w-[2.125rem]">a</h3>
                    </div>
                    <div className="flex justify-around text-center  md:p-1 p-[0.1rem] gap-6">
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[8rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem] w-[3.2rem]">a</h3>
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[8rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem] w-[3.2rem]">a</h3>
                    </div>
                    <div className="flex justify-around text-center  md:p-1 p-[0.1rem]">
                        <h3 className="md:border-2 border-[1px] border-c-creme md:rounded-lg rounded-sm md:w-[20.5rem] md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem] w-[9.4375rem]">a</h3>
                    </div>
                    <div className="flex items-center justify-center md:p-1 p-[0.1rem]">
                        <button className="bg-blue-900 px-8 rounded-md md:h-[1.69406rem] md:text-[1rem] text-[0.4375rem]">Participar</button>
                    </div>
                </div>
            </div>
        </div>

    
    </>
    
)

}