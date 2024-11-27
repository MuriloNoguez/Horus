import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link} from 'react-router-dom'; 

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
        <>
      <body className="flex space-between bg-blue-700">
    <div>
      <h1>Login on Horus</h1>
      <br />
      <h3>E-mail:</h3>
      <input type="text" value= "email" placeholder="Digite seu E-mail: " />
      <br />
      <h3>Senha:</h3>
      <input type="text" value="senha" placeholder="Digite sua Senha: " />
      <p>Esqueceu a senha:
        <button>clique aqui</button>
      </p>
      <br />
      <button>Login</button>
      <p>Ou faça login com</p>
      <button>Gmail</button>
      <button>Facebook</button>
      <button>Discord</button>
    </div>

    <div>
      <img src="Horus" alt="" />
      <h1>Não possui conta?</h1>
      <h2>Registre-se agora e desfrute de nossos recursos</h2>
      <br />
      <button>
      <Link to={'/Registro'}>
        Registre-se</Link></button>
    </div>
  </body>
        </>
    );

    // return (
    //     <>
    //         <form onSubmit={handleSubmit(handleLogin)}>
    //             <input type="email" placeholder="Email" {...register('email')} required />
    //             <input type="password" placeholder="Senha" {...register('password')} required />
    //             <input type="submit" value='Login' />
    //             {message && <p>{message}</p>}
    //         </form>
    //     </>
    // );
}
