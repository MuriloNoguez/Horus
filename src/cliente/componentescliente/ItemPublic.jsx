import { useEffect, useState } from "react";

export function Itempubli() {
    const [publicacoes, setPublicacoes] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    const cpf = localStorage.getItem('cpfUsuario');

    useEffect(() => {
        // Buscar publicações
        fetch('http://localhost:3000/publis')
            .then(response => response.json())
            .then(data => {
                console.log("Publicações:", data); // Log de depuração
                setPublicacoes(data);
            })
            .catch(error => {
                console.error("Erro ao buscar publicações:", error);
            });

        // Buscar usuários
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => {
                console.log("Usuários:", data); // Log de depuração
                setUsuarios(data);
            })
            .catch(error => {
                console.error("Erro ao buscar usuários:", error);
            });
    }, []);

    const participar = async (publicacao) => {
        if (publicacao.participantes < publicacao.vagas) {
            const atualizada = {
                ...publicacao,
                participantes: publicacao.participantes + 1
            };

            const response = await fetch(`http://localhost:3000/publis/${publicacao.id}`, {
                method: 'PUT',
                body: JSON.stringify(atualizada),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setPublicacoes((prev) => prev.map((pub) =>
                    pub.id === publicacao.id ? atualizada : pub
                ));
            }
        }
    };

    // Função para obter o nome do usuário pelo CPF
    const Nome = (cpf) => {
        const usuario = usuarios.find(user => user.cpf === cpf);
        console.log("CPF buscado:", cpf, "Usuário encontrado:", usuario); // Log de depuração

        if (usuario) {
            const [primeiroNome] = usuario.nome.split(' ');
            return primeiroNome;
        } else {
            return "Usuário desconhecido";
        }
    };

    return (
        <>
            {publicacoes.map((publicacao, index) => (
                <div key={index} className="publicacao-item">
                    <div className="flex items-center justify-start w-[23.29356rem] p-1">
                        <img src="public/perfil.png" alt="" className="h-[2rem] w-[2rem] rounded-full"/>
                        <h3 className="p-3">{Nome(publicacao.cpfUsuario)}</h3>
                    </div>
                    <div className="text-c-creme">
                        <div className="w-[23.29356rem] h-[23.29356rem] rounded-t-[0.5rem]">
                            <img src="public/HeaderBG.png" alt="" className="w-[23.29356rem] h-[23.29356rem] rounded-t-[0.5rem]"/>
                        </div>
                        <div className="bg-c-cinza w-[23.3125rem] h-[10.5625rem] rounded-b-[0.5rem] pt-[1rem]">
                            <div className="flex justify-around text-center p-1">
                                <h3 className="border-2 border-c-creme rounded-lg w-[4.87075rem]">{publicacao.esporte}</h3>
                                <h3 className="border-2 border-c-creme rounded-lg w-[4.87075rem]">{publicacao.participantes}/{publicacao.vagas}</h3>
                                <h3 className="border-2 border-c-creme rounded-lg w-[4.87075rem]">{publicacao.distancia}</h3>
                            </div>
                            <div className="flex justify-around text-center p-1 gap-6">
                                <h3 className="border-2 border-c-creme rounded-lg w-[8rem]">{publicacao.data}</h3>
                                <h3 className="border-2 border-c-creme rounded-lg w-[8rem]">{publicacao.hora}</h3>
                            </div>
                            <div className="flex justify-around text-center p-1">
                                <h3 className="border-2 border-c-creme rounded-lg w-[20.5rem]">{publicacao.local}</h3>
                            </div>
                            <div className="flex items-center justify-center p-1">
                                <button className="bg-blue-900 px-8 rounded-md" onClick={() => participar(publicacao)}>Participar</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
