import React, { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import { NewPost } from "./NewPost";
import { Link } from "react-router-dom";
import { postService } from '../data/posts';
import "react-responsive-modal/styles.css";
import "../modal-overrides.css";

export function Sidebar() {
    const [publis, setPublis] = useState([]);
    const [open, setOpen] = useState(false);
    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [publicacoesFiltradas, setPublicacoesFiltradas] = useState([]);

    useEffect(() => {
        const searchPosts = async () => {
            try {
                const filtradas = await postService.searchPosts(termoPesquisa);
                setPublicacoesFiltradas(filtradas);
            } catch (error) {
                console.error("Erro ao filtrar publicações:", error);
            }
        };

        if (termoPesquisa) {
            searchPosts();
        } else {
            setPublicacoesFiltradas([]);
        }
    }, [termoPesquisa, publis]);

    function abrirForm() {
        setOpen(true);
    }

    function fecharForm() {
        setOpen(false);
    }

    const handlePesquisaChange = (event) => {
        setTermoPesquisa(event.target.value);
    };

    return (
        <>
                                    <aside className="text-c-creme w-full md:w-auto md:h-full">
                                        {/* Mobile: só ícones, rodapé fixo, sem logo/campo busca */}
                                        <div className="flex md:hidden flex-row items-center justify-center gap-8 fixed bottom-0 left-0 right-0 z-40 bg-c-Azul/95 shadow-2xl py-2 w-full">
                                            <Link to={'/Page-Clientes'}>
                                                <button className="flex flex-col items-center justify-center">
                                                    <img src="/home.png" alt="Início" className="w-8 h-8" />
                                                </button>
                                            </Link>
                                            <button onClick={abrirForm} className="flex flex-col items-center justify-center">
                                                <img src="/IconAdd.png" alt="Criar" className="w-8 h-8" />
                                            </button>
                                            <Link to={'/Perfil'}>
                                                <button className="flex flex-col items-center justify-center">
                                                    <img src="/perfil.png" alt="Perfil" className="w-8 h-8" />
                                                </button>
                                            </Link>
                                        </div>
                                        {/* Desktop: sidebar completa */}
                                        <div className="hidden md:flex md:flex-col items-center justify-start gap-8 md:fixed md:h-screen w-full md:w-auto px-2 md:px-0 max-h-screen md:overflow-y-auto">
                                            <img src="/SimbolBg-P.png" alt="" className="w-[5.5rem] mb-2"/>
                                            <div className="border-2 border-c-creme rounded-md flex items-center p-1">
                                                <img src="/lupa.png" alt="" className="w-[1rem]"/>
                                                <input 
                                                    type="text"
                                                    value={termoPesquisa}
                                                    onChange={handlePesquisaChange}
                                                    placeholder="Pesquisar"
                                                    className="bg-transparent w-[7rem] text-center focus:outline-none"/>
                                            </div>
                                            <Link to={'/Page-Clientes'}>
                                                <button className="flex w-[7rem] gap-4 justify-items-start items-center">
                                                    <img src="/home.png" alt="" />
                                                    <h3>Início</h3>
                                                </button>
                                            </Link>
                                            <button onClick={abrirForm} className="flex w-[7rem] gap-4 justify-items-start items-center">
                                                <img src="/IconAdd.png" alt="" />
                                                <h3>Criar</h3>
                                            </button>
                                            <Link to={'/Perfil'}>
                                                <button className="flex w-[7rem] gap-4 justify-items-start items-center">
                                                    <img src="/perfil.png" alt="" />
                                                    <h3>Perfil</h3>
                                                </button>
                                            </Link>
                                        </div>
            </aside>

            <Modal
                open={open}
                onClose={fecharForm}
                center
                classNames={{ modal: 'p-0' }}
            >              
                <NewPost publis={publis} setPublis={setPublis} />
            </Modal>
        </>
    );
}