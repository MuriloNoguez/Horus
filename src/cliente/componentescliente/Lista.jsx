import React, { useState, useEffect } from "react";

export function Lista() {
    const [publicacoes, setPublicacoes] = useState([]);

    useEffect(() => {
        // Fazendo a requisição para buscar todas as publicações do JSON Server
        fetch('http://localhost:3000/publis')
            .then(response => response.json())
            .then(data => {
                setPublicacoes(data);
            })
            .catch(error => {
                console.error("Erro ao buscar publicações:", error);
            });
    }, []);

    return (
        <div>
            <h1>Publicações</h1>
            <ul>
                {publicacoes.map((publicacao, index) => (
                    <li key={index}>
                        <h2>{publicacao.esporte}</h2>
                        <p>Local: {publicacao.local}</p>
                        <p>Data: {publicacao.data}</p>
                        <p>Hora: {publicacao.hora}</p>
                        <p>Vagas: {publicacao.vagas}</p>
                        <p>Distância: {publicacao.distancia}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}


