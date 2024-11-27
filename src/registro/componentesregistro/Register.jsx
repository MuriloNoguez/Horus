import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Componente Register para registro de novos usuários
export function Register({ users, setUsers }) {
    const { register, handleSubmit, reset } = useForm(); // Hook para gerenciar o formulário
    const [message, setMessage] = useState(''); // Estado para armazenar mensagens de feedback
    const navigate = useNavigate(); // Hook para navegação programática

    // Função de registro do usuário
    const handleRegister = async (data) => {
        // Verificação de correspondência das senhas
        if (data.password !== data.confirmPassword) {
            setMessage('As senhas não conferem');
            return;
        }
        
        try {
            // Busca todos os usuários do servidor JSON
            const response = await fetch("http://localhost:3000/users");
            const usersFromServer = await response.json();
            
            // Verificação se o usuário já está cadastrado
            const userExists = usersFromServer.some(user => user.email === data.email || user.cpf === data.cpf);
            if (userExists) {
                setMessage('Usuário já cadastrado');
                return;
            }

            // Criação do novo usuário
            const newUser = {
                email: data.email,
                nome: data.nome,
                cpf: data.cpf,
                password: data.password,
            };

            // Atualiza a lista de usuários localmente
            const updatedUsers = [...users, newUser];
            setUsers(updatedUsers);

            // Envia os dados do novo usuário para o servidor JSON
            await fetch("http://localhost:3000/users", {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            // Mensagem de sucesso e reset do formulário
            setMessage('Usuário cadastrado com sucesso');
            reset();
            navigate('/Page-Clientes'); // Redireciona para a página de clientes
        } catch (error) {
            // Mensagem de erro em caso de falha no cadastro
            setMessage('Erro ao cadastrar usuário');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(handleRegister)}>
                <input type="email" placeholder="Email" {...register('email')} required />
                <input type="text" placeholder="Nome" {...register('nome')} required />
                <input type="text" placeholder="CPF" {...register('cpf')} required />
                <input type="password" placeholder="Senha" {...register('password')} required />
                <input type="password" placeholder="Confirme a Senha" {...register('confirmPassword')} required />
                <input type="submit" value='Registrar' />
                {message && <p>{message}</p>}
            </form>
        </>
    );
}
