import { useEffect, useState } from "react";
import { postService } from '../data/posts';
import { userService } from '../data/users';

export function PostsList() {
    const [publicacoes, setPublicacoes] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    const cpf = localStorage.getItem('cpfUsuario');

    useEffect(() => {
        const loadData = async () => {
            try {
                // Buscar publicações
                const postsData = await postService.getAllPosts();
                console.log("Publicações:", postsData);
                setPublicacoes(postsData);

                // Buscar usuários
                const usersData = await userService.getAllUsers();
                console.log("Usuários:", usersData);
                setUsuarios(usersData);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        loadData();
    }, []);

    const participar = async (publicacao) => {
        try {
            const updatedPost = await postService.joinPost(publicacao.id);
            if (updatedPost) {
                setPublicacoes((prev) => prev.map((pub) =>
                    pub.id === publicacao.id ? updatedPost : pub
                ));
            }
        } catch (error) {
            console.error("Erro ao participar da publicação:", error);
        }
    };

    const getName = (cpf) => {
        const usuario = usuarios.find(user => user.cpf === cpf);
        console.log("CPF buscado:", cpf, "Usuário encontrado:", usuario);
        return usuario ? usuario.nome : "Usuário desconhecido";
    };

    return (
        <>
            {publicacoes.map((publicacao, index) => (
                <div key={index} className="publicacao-item w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col rounded-xl shadow-lg bg-slate-900/80 overflow-hidden">
                    <div className="flex items-center justify-start px-4 py-2 gap-2">
                        <img src="/perfil.png" alt="" className="h-8 w-8 rounded-full"/>
                        <h3 className="text-base md:text-lg font-semibold text-c-creme">{getName(publicacao.cpfUsuario)}</h3>
                    </div>
                    <div className="text-c-creme flex flex-col">
                        <div className="w-full aspect-square bg-black/30 flex items-center justify-center">
                            <img src="/HeaderBG.png" alt="" className="w-full h-full object-cover rounded-t-xl"/>
                        </div>
                        <div className="bg-c-cinza w-full rounded-b-xl pt-3 pb-4 px-3 flex flex-col gap-2">
                            <div className="flex flex-wrap justify-center gap-2 mb-1">
                                <span className="inline-block rounded-full bg-c-creme/10 border border-c-creme text-c-creme text-xs font-semibold px-4 py-1">{publicacao.esporte}</span>
                                <span className="inline-block rounded-full bg-c-creme/10 border border-c-creme text-c-creme text-xs font-semibold px-4 py-1">{publicacao.participantes}/{publicacao.vagas}</span>
                                <span className="inline-block rounded-full bg-c-creme/10 border border-c-creme text-c-creme text-xs font-semibold px-4 py-1">{publicacao.distancia}</span>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 mb-1">
                                <span className="inline-block rounded-full bg-c-creme/10 border border-c-creme text-c-creme text-xs font-semibold px-4 py-1">{publicacao.data}</span>
                                <span className="inline-block rounded-full bg-c-creme/10 border border-c-creme text-c-creme text-xs font-semibold px-4 py-1">{publicacao.hora}</span>
                            </div>
                            <div className="flex justify-center text-center mb-1">
                                <span className="inline-block rounded-full bg-c-creme/10 border border-c-creme text-c-creme text-xs font-semibold px-4 py-1 w-full truncate">{publicacao.local}</span>
                            </div>
                            <div className="flex items-center justify-center pt-2">
                                <button className="bg-blue-900 px-8 py-2 rounded-md text-c-creme font-bold hover:bg-blue-800 transition" onClick={() => participar(publicacao)}>Participar</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}