import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { userService } from '../data/users';


function Login() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (data) => {
        setLoading(true);
        setMessage("");
        try {
            const user = await userService.login(data.email, data.password);
            if (user) {
                localStorage.setItem("cpfUsuario", user.cpf);
                setMessage("");
                reset();
                navigate("/Page-Clientes");
            } else {
                setMessage("Usuário ou senha inválidos");
            }
        } catch (error) {
            setMessage("Erro ao logar");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex items-center justify-center md:flex-row flex-col-reverse min-h-screen md:bg-gradient-to-r from-[#001425] to-[#004A8B] bg-c-Azul">
            <div className="bg-c-creme md:w-[38.875rem] md:h-[39.875rem] w-[22.4375rem] h-[27.375rem] text-c-Azul flex flex-col items-center justify-center p-8 md:rounded-l-xl rounded-l-xl shadow-2xl">
                <form onSubmit={handleSubmit(handleLogin)} className="w-full max-w-md">
                    <h1 className="text-c-Azul md:text-[2.5rem] text-[1.5rem] font-bold text-center mb-8">Acesse sua conta</h1>
                    <div className="flex flex-col gap-4">
                        <label className="md:text-[1.25rem] font-semibold" htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                            autoComplete="username"
                            {...register("email", { required: "E-mail é obrigatório" })}
                            className={`md:w-[26rem] md:h-[2.3125rem] border-2 rounded-md bg-transparent p-3 md:text-[1.125rem] text-[0.95rem] w-full h-[2.2rem] focus:outline-none focus:border-blue-500 transition ${errors.email ? 'border-red-500' : 'border-c-Azul'}`}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

                        <label className="md:text-[1.25rem] font-semibold pt-2" htmlFor="password">Senha</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Digite sua senha"
                            autoComplete="current-password"
                            {...register("password", { required: "Senha é obrigatória" })}
                            className={`md:w-[26rem] md:h-[2.3125rem] border-2 rounded-md bg-transparent p-3 md:text-[1.125rem] text-[0.95rem] w-full h-[2.2rem] focus:outline-none focus:border-blue-500 transition ${errors.password ? 'border-red-500' : 'border-c-Azul'}`}
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

                        <div className="flex justify-between items-center mt-2 mb-2">
                            <span className="md:text-[0.95rem] text-[0.85rem] text-slate-500">Esqueceu a senha?</span>
                            <button type="button" className="text-blue-600 font-semibold hover:underline text-sm">Recuperar</button>
                        </div>

                        <button
                            type="submit"
                            className="md:w-[26rem] w-full md:h-[2.3125rem] h-[2.2rem] md:text-[1.5rem] text-[1.1rem] bg-c-Azul text-c-creme font-bold rounded-md mt-2 transition hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
                            disabled={loading}
                        >
                            {loading ? "Entrando..." : "Entrar"}
                        </button>
                        {message && <p className="text-center text-red-500 mt-2">{message}</p>}
                    </div>
                </form>
            </div>
            <div className="md:bg-gradient-to-r from-[#26A6D5] to-[#001425] bg-transparent md:w-[39.25rem] md:h-[39.875rem] rounded-r-xl text-c-creme flex flex-col items-center justify-center">
                <img src="/SimbolBg-P.png" alt="Logo Horus" className="md:w-[12.5rem] md:mb-10" />
                <h2 className="md:hidden text-[2.5rem] font-bold">Login</h2>
                <h1 className="md:text-[2.5rem] md:block hidden font-bold text-center">Não possui conta?</h1>
                <h2 className="md:text-[2rem] md:block hidden text-center">Registre-se agora e desfrute <br /> de nossos recursos</h2>
                <Link to={'/Registro'}>
                    <button className="md:w-[26rem] md:h-[2.3125rem] md:text-[1.5rem] bg-transparent text-c-creme border-2 border-c-creme font-bold rounded-md mt-5 md:block hidden transition hover:bg-c-creme/10">Registre-se</button>
                </Link>
            </div>
        </section>
    );
}

export default Login;