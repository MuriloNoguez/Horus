import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

// Componente Entrar para autenticação de usuários
export function Entrar() {
    const { register, handleSubmit, reset } = useForm(); // Hook para gerenciar o formulário
    const [message, setMessage] = useState(''); // Estado para armazenar mensagens de feedback
    const navigate = useNavigate(); // Hook para navegação programática

    // Função de login do usuário
    const handleLogin = async (data) => {
        try {
            // Faz uma requisição para buscar todos os usuários do servidor JSON
            const response = await fetch("http://localhost:3000/users");
            const usersFromServer = await response.json();

            // Verifica se as credenciais de login correspondem a um usuário cadastrado
            const user = usersFromServer.find(user => user.email === data.email && user.password === data.password);

            if (user) {
                // Login bem-sucedido
                localStorage.setItem('cpfUsuario', user.cpf); // Armazena o CPF do usuário no localStorage
                console.log("CPF armazenado no localStorage:", user.cpf); // Log de depuração
                setMessage('Usuário logado com sucesso');
                reset(); // Reseta o formulário após login bem-sucedido
                navigate('/Page-Clientes'); // Redireciona para a página de clientes
            } else {
                // Email ou senha incorretos
                setMessage('Usuário ou senha inválidos');
            }
        } catch (error) {
            // Mensagem de erro em caso de falha na autenticação
            setMessage('Erro ao logar');
        }
    };

    return (
      <section className="flex items-center justify-center md:flex-row flex-col-reverse min-h-screen md:bg-gradient-to-r from-[#001425] to-[#004A8B] bg-c-Azul">
        <div className='bg-c-creme md:w-[38.875rem] md:h-[39.875rem] w-[22.4375rem] h-[27.375rem] text-c-Azul flex flex-col items-center justify-center p-8 md:rounded-l-xl rounded-l-xl'>
          <form onSubmit={handleSubmit(handleLogin)} >
            <h1 className='text-c-Azul md:text-[2.5rem] text-[1.125rem] font-bold text-center md:block hidden'>Login na Horus</h1>
            <div className='flex flex-col p-5'>
              <label className='md:text-[1.25rem]'>E-mail</label>
              <input
                    type="email"
                    placeholder="Digite o email"
                    {...register('email', { required: 'Email é obrigatório' })}
                    className="md:w-[26rem] md:h-[2.3125rem] border-c-Azul border-2 rounded-md bg-transparent p-3 md:text-[1.125rem] text-[0.875rem] w-[17.4375rem] h-[1.8125rem]"
                />
                <label className='md:text-[1.25rem] pt-4'>Senha</label>
                <input
                    type="password"
                    placeholder="Digite sua Senha"
                    {...register('password', { required: 'Senha é obrigatória' })}
                    className="md:w-[26rem] md:h-[2.3125rem] border-c-Azul border-2 rounded-md bg-transparent p-3 md:text-[1.125rem] text-[0.875rem] w-[17.4375rem] h-[1.8125rem]"
                />
                <p className='md:text-[0.9375rem] text-[0.75rem]'>Esqueceu a senha?
                    <button className="text-blue-500">Clique aqui</button>
                </p>
                <button type="submit" className="md:w-[26rem] md:h-[2.3125rem] md:text-[1.5rem] bg-c-Azul text-c-creme font-bold rounded-md mt-5">Login</button>
                <div className='flex md:w-[26rem] items-center justify-around mt-5'>
                  <hr className='md:w-[8.0625rem] w-[5.40731rem] border-2 border-c-Azul'/>
                  <p className='md:text-[0.9375rem] text-[0.625rem]'>Ou faça login com</p>
                  <hr className='md:w-[8.0625rem] w-[5.40731rem] border-2 border-c-Azul'/>
                </div>
                <div className='md:w-[26rem] flex justify-around items-center mt-5'>
                  <button className='w-[3.125rem] h-[3.125rem] bg-black rounded-full'><img src="public/perfil.png" alt="" /></button>
                  <button className='w-[3.125rem] h-[3.125rem] bg-black rounded-full'><img src="public/perfil.png" alt="" /></button>
                  <button className='w-[3.125rem] h-[3.125rem] bg-black rounded-full'><img src="public/perfil.png" alt="" /></button>
                  {message && <p className="text-center text-red-500">{message}</p>}
                </div>
            </div>
          </form>
        </div>
        <div className='md:bg-gradient-to-r from-[#26A6D5] to-[#001425] bg-transparent md:w-[39.25rem] md:h-[39.875rem] rounded-r-xl text-c-creme flex flex-col items-center justify-center'>
          <img src="SimbolBg-P.png" alt="" className='md:w-[12.5rem] md:mb-10'/>
          <h2 className='md:hidden text-[2.5rem] font-bold'>Login</h2>
          <h1 className='md:text-[2.5rem]  md:block hidden font-bold text-center'>Não possui conta?</h1>
          <h2 className='md:text-[2rem] md:block hidden text-center'>Registre-se agora e desfrute <br /> de nossos recursos</h2>
          <Link to={'/Registro'}>
              <button className="md:w-[26rem] md:h-[2.3125rem] md:text-[1.5rem] bg-transparent text-c-creme border-2 border-c-creme font-bold rounded-md mt-5 md:block hidden">Registre-se</button>
          </Link>
        </div>
      </section>
    );
}
