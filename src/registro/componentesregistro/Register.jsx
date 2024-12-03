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
        } else {
            try {
                // Busca todos os usuários do servidor JSON
                const response = await fetch("http://localhost:3000/users");
                const usersFromServer = await response.json();

                // Verificação se o usuário já está cadastrado
                const userExists = usersFromServer.some(user => user.email === data.email || user.cpf === data.cpf);
                if (userExists) {
                    setMessage('Usuário já cadastrado');
                } else {
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

                    localStorage.setItem('cpfUsuario', newUser.cpf);

                    // Mensagem de sucesso e reset do formulário
                    setMessage('Usuário cadastrado com sucesso');
                    reset();
                    navigate('/Page-Clientes'); // Redireciona para a página de clientes
                }
            } catch (error) {
                // Mensagem de erro em caso de falha no cadastro
                setMessage('Erro ao cadastrar usuário');
            }
        }
    };

    return (
        <section className="flex items-center justify-center md:flex-row flex-col-reverse min-h-screen md:bg-gradient-to-r from-[#001425] to-[#004A8B] bg-c-Azul">
            <div className='bg-c-creme md:w-[38.875rem] md:h-[39.875rem] w-[22.4375rem] h-[27.375rem] text-c-Azul flex flex-col items-center justify-center p-8 md:rounded-l-xl rounded-l-xl'>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <h1 className='text-c-Azul md:text-[2.5rem] text-[1.125rem] font-bold text-center md:block hidden'>Registro na Horus</h1>
                    <div className='flex flex-col p-5'>
                        <label className='md:text-[1.25rem]'>E-mail</label>
                        <input
                            type="email"
                            placeholder="Digite o email"
                            {...register('email')} required
                            className="md:w-[26rem] md:h-[2.3125rem] border-c-Azul border-2 rounded-md bg-transparent p-3 md:text-[1.125rem] text-[0.875rem] w-[17.4375rem] h-[1.8125rem]"
                        />
                        <label className='md:text-[1.25rem]'>Nome</label>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            {...register('nome')} required
                            className="md:w-[26rem] md:h-[2.3125rem] border-c-Azul border-2 rounded-md bg-transparent p-3 md:text-[1.125rem] text-[0.875rem] w-[17.4375rem] h-[1.8125rem]"
                        />
                        <label className='md:text-[1.25rem]'>CPF</label>
                        <input
                            type="text"
                            placeholder="Digite seu CPF"
                            {...register('cpf')} required
                            className="md:w-[26rem] md:h-[2.3125rem] border-c-Azul border-2 rounded-md bg-transparent p-3 md:text-[1.125rem] text-[0.875rem] w-[17.4375rem] h-[1.8125rem]"
                        />
                        <label className='md:text-[1.25rem] pt-4'>Senha</label>
                        <input
                            type="password"
                            placeholder="Digite sua Senha"
                            {...register('password')} required
                            className="md:w-[26rem] md:h-[2.3125rem] border-c-Azul border-2 rounded-md bg-transparent p-3 md:text-[1.125rem] text-[0.875rem] w-[17.4375rem] h-[1.8125rem]"
                        />
                        <label className='md:text-[1.25rem] pt-4'>Confirme sua senha</label>
                        <input
                            type="password"
                            placeholder="Digite sua Senha novamente"
                            {...register('confirmPassword')} required
                            className="md:w-[26rem] md:h-[2.3125rem] border-c-Azul border-2 rounded-md bg-transparent p-3 md:text-[1.125rem] text-[0.875rem] w-[17.4375rem] h-[1.8125rem]"
                        />
                        <button type="submit" className="md:w-[26rem] md:h-[2.3125rem] md:text-[1.5rem] bg-c-Azul text-c-creme font-bold rounded-md mt-5">Registrar</button>
                        {message && <p className="text-center text-red-500">{message}</p>}
                    </div>
                </form>
            </div>
            <div className='md:bg-gradient-to-r from-[#26A6D5] to-[#001425] bg-transparent md:w-[39.25rem] md:h-[39.875rem] rounded-r-xl text-c-creme flex flex-col items-center justify-center'>
                <img src="SimbolBg-P.png" alt="" className='md:w-[12.5rem] md:mb-10'/>
                <h2 className='md:hidden text-[2.5rem] font-bold'>Registro</h2>
                <h1 className='md:text-[2.5rem]  md:block hidden font-bold text-center'>Já possui conta?</h1>
                <h2 className='md:text-[2rem] md:block hidden text-center'>Faça login agora e desfrute <br /> de nossos recursos</h2>
                <button className="md:w-[26rem] md:h-[2.3125rem] md:text-[1.5rem] bg-transparent text-c-creme border-2 border-c-creme font-bold rounded-md mt-5 md:block hidden">Login</button>
            </div>
        </section>
    );
}
