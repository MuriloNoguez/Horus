import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { NovaPubli } from "./NovaPublic";
import "react-responsive-modal/styles.css";

export function Cabecalho() {
    const [publis, setPublis] = useState([]);
    const [open, setOpen] = useState(false);

    function abrirForm() {
        setOpen(true);
    }

    function fecharForm() {
        setOpen(false);
    }

    return (
        <>
            <aside class="text-c-creme h-full flex justify-center">
                <div className="flex md:flex-col  items-center justify-center gap-8 md:fixed">
                <img src="public\SimbolBg-P.png" alt="" className="w-[5.5rem] md:block hidden "/>



                    <div className="border-2 border-c-creme rounded-md md:flex items-center p-1   hidden">
                    <img src="public\lupa.png" alt="" className="w-[1rem]"/>
                    <input type="text" name="busca" id="" placeholder="Buscar" className="bg-transparent w-[7rem] text-center focus:outline-none"/>
                </div>

                <div>
                    
                </div>
                <button className="flex w-[7rem] gap-4 justify-items-start items-center">
                    <img src="public\home.png" alt="" />
                    <h3 className="md:block hidden">Inicio</h3>
                </button>
                <button onClick={abrirForm} className="flex w-[7rem] gap-4 justify-items-start items-center">
                    <img src="public\IconAdd.png" alt="" />
                    <h3 className="md:block hidden">Criar</h3>
                </button>
                <button className="flex w-[7rem] gap-4 justify-items-start items-center">
                    <img src="public\perfil.png" alt="" />
                    <h3 className="md:block hidden">Perfil</h3>
                </button>
                
                </div>
                
                
            </aside>
            <Modal
                open={open}
                onClose={fecharForm}
                center
>              
                <NovaPubli publis={publis} setPublis={setPublis} />
            </Modal>

        </>
    );
}
