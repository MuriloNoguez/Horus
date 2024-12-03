import { Link } from "react-router-dom";

export function Header () {
    return(
        <>
        <header className="bg-c-Azul flex justify-between px-5 fixed w-[100%] md:h-[6.25rem] h-[2.56rem] items-center">
            <div>
                <img src="./SimbolBg-P.png" alt="Logo" className="md:h-[2.75rem] h-[2rem]"/>
            </div>
            <div className="flex justify-center items-center">
                <div className=" flex md:w-[27rem] w-[12rem] justify-between ">
                    <button className="bg-c-creme text-c-Azul font-montserrat font-bold md:text-lg md:w-[12.4375rem] md:h-[2.3125rem] md:rounded-lg rounded-sm w-[5.5rem] h-[0.9375rem] flex justify-center items-center">
                        <Link to={'/Login'} href="" className="md:text-[1.5rem] text-[0.625rem] text-center">Login</Link>
                    </button>
                    <button className="border-c-creme border-2 text-c-creme font-montserrat font-bold md:text-lg md:w-[12.4375rem] md:h-[2.3125rem] md:rounded-lg rounded-sm w-[5.5rem] h-[0.9375rem] flex justify-center items-center">
                        <Link to={'/Registro'}
                            href="" className="md:text-[1.5rem] text-[0.625rem]">Registre-se</Link>
                    </button>
                </div>
                
            </div>
            

        </header>
        <section className=" bg-[url('/academia/acdemia.jpg')]  bg-cover w-[100%] md:w-[100%] md:h-[30.625rem] h-[11.875rem] flex items-center justify-center">
        <img src="./HORUS.png" alt="" className="md:w-[51.6875rem] w-[20.75rem]"/>

        </section>
    </>
    )
    
    }