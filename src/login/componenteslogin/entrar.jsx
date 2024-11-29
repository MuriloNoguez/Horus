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
      <section className="flex items-center justify-center h-screen md:bg-gradient-to-r from-[#001425] to-[#004A8B]">
        <div className='bg-c-creme w-[38.875rem] h-[39.875rem]'>
          <form onSubmit={handleSubmit(handleLogin)} >
            <h1>Faça seu Login na Horus</h1>
            <input
                    type="email"
                    placeholder="Digite o email"
                    {...register('email', { required: 'Email é obrigatório' })}
                    className="input input-bordered w-full"
                />
                <input
                    type="password"
                    placeholder="Digite sua Senha"
                    {...register('password', { required: 'Senha é obrigatória' })}
                    className="input input-bordered w-full"
                />
                <p>Esqueceu a senha?
                    <button className="text-blue-500">Clique aqui</button>
                </p>
                <button type="submit" className="btn btn-primary w-full">Login</button>
                <div>
                  <hr />
                  <p>Ou faça login com</p>
                  <hr />
                </div>
                <div>
                  <button className='w-[3.125rem] h-[3.125rem] bg-black rounded-full'><img src="public\perfil.png" alt="" /></button>
                  <button className='w-[3.125rem] h-[3.125rem] bg-black rounded-full'><img src="public\perfil.png" alt="" /></button>
                  <button className='w-[3.125rem] h-[3.125rem] bg-black rounded-full'><img src="public\perfil.png" alt="" /></button>
                  {message && <p className="text-center text-red-500">{message}</p>}
                </div>

                
          </form>
        </div>
        <div className='bg-gradient-to-r from-[#001425] to-[#26A6D5] w-[39.25rem] h-[39.875rem]'>
          <img src="SimbolBg-P.png" alt="" />
          <h1>Não possui conta?</h1>
          <h2>Registre-se agora e desfrute de nossos recursos</h2>
          <Link to={'/Registro'}>
              <button className="btn btn-accent">Registre-se</button>
          </Link>
        </div>

      </section>
        
    );
}
