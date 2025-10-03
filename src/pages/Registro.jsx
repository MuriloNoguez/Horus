import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { userService } from '../data/users';


function Registro() {
    const [users, setUsers] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (data) => {
        setMessage("");
        if (data.password !== data.confirmPassword) {
            setMessage("As senhas não conferem");
            return;
        }
        setLoading(true);
        try {
            const userExists = await userService.userExists(data.email, data.cpf);
            if (userExists) {
                setMessage("Usuário já cadastrado");
            } else {
                const newUser = {
                    email: data.email,
                    nome: data.nome,
                    cpf: data.cpf,
                    password: data.password,
                };
                const createdUser = await userService.createUser(newUser);
                setUsers((prev) => [...prev, createdUser]);
                localStorage.setItem("cpfUsuario", createdUser.cpf);
                setMessage("");
                reset();
                navigate("/Page-Clientes");
            }
        } catch (error) {
            setMessage("Erro ao cadastrar usuário");
        } finally {
            setLoading(false);
        }
    };

    return (
                <section className="flex items-center justify-center md:flex-row flex-col-reverse min-h-screen md:bg-gradient-to-r from-[#001425] to-[#004A8B] bg-c-Azul">
                                        <div className="bg-c-creme md:w-[38.875rem] md:h-[39.875rem] w-[22.4375rem] h-[27.375rem] text-c-Azul flex flex-col items-center justify-center p-4 md:rounded-l-xl rounded-l-xl shadow-2xl overflow-y-auto">
                                                <form onSubmit={handleSubmit(handleRegister)} className="w-full max-w-md">
                                                        <h1 className="text-c-Azul md:text-[2.5rem] text-[1.5rem] font-bold text-center mb-4">Crie sua conta</h1>
                                                            <div className="flex flex-col gap-0.5 md:gap-1">
                                    <label className="md:text-[1.05rem] text-[0.95rem] font-semibold" htmlFor="email">E-mail</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Digite seu e-mail"
                                        autoComplete="username"
                                        {...register("email", { required: "E-mail é obrigatório" })}
                                        className={`md:w-[26rem] md:h-[2.3125rem] border-2 rounded-md bg-transparent p-3 md:text-[1.125rem] text-[0.95rem] w-full h-[2.2rem] focus:outline-none focus:border-blue-500 transition ${errors.email ? 'border-red-500' : 'border-c-Azul'}`}
                                    />
                                    {errors.email && <span className="text-red-500 text-[0.7rem] mt-0.5 block leading-tight">{errors.email.message}</span>}

                                    <label className="md:text-[1.05rem] text-[0.95rem] font-semibold" htmlFor="nome">Nome</label>
                                    <input
                                        id="nome"
                                        type="text"
                                        placeholder="Digite seu nome"
                                        autoComplete="name"
                                        {...register("nome", { required: "Nome é obrigatório" })}
                                        className={`md:w-[26rem] md:h-[2.3125rem] border-2 rounded-md bg-transparent p-3 md:text-[1.125rem] text-[0.95rem] w-full h-[2.2rem] focus:outline-none focus:border-blue-500 transition ${errors.nome ? 'border-red-500' : 'border-c-Azul'}`}
                                    />
                                    {errors.nome && <span className="text-red-500 text-[0.7rem] mt-0.5 block leading-tight">{errors.nome.message}</span>}

                                    <label className="md:text-[1.05rem] text-[0.95rem] font-semibold" htmlFor="cpf">CPF</label>
                                    <input
                                        id="cpf"
                                        type="text"
                                        placeholder="Digite seu CPF"
                                        autoComplete="off"
                                        {...register("cpf", { required: "CPF é obrigatório" })}
                                        className={`md:w-[26rem] md:h-[2.3125rem] border-2 rounded-md bg-transparent p-3 md:text-[1.125rem] text-[0.95rem] w-full h-[2.2rem] focus:outline-none focus:border-blue-500 transition ${errors.cpf ? 'border-red-500' : 'border-c-Azul'}`}
                                    />
                                    {errors.cpf && <span className="text-red-500 text-[0.7rem] mt-0.5 block leading-tight">{errors.cpf.message}</span>}

                                    <label className="md:text-[1.05rem] text-[0.95rem] font-semibold pt-1" htmlFor="password">Senha</label>
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Digite sua senha"
                                        autoComplete="new-password"
                                        {...register("password", { required: "Senha é obrigatória" })}
                                        className={`md:w-[26rem] md:h-[2.3125rem] border-2 rounded-md bg-transparent p-3 md:text-[1.125rem] text-[0.95rem] w-full h-[2.2rem] focus:outline-none focus:border-blue-500 transition ${errors.password ? 'border-red-500' : 'border-c-Azul'}`}
                                    />
                                    {errors.password && <span className="text-red-500 text-[0.7rem] mt-0.5 block leading-tight">{errors.password.message}</span>}

                                    <label className="md:text-[1.05rem] text-[0.95rem] font-semibold pt-1" htmlFor="confirmPassword">Confirme sua senha</label>
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Confirme sua senha"
                                        autoComplete="new-password"
                                        {...register("confirmPassword", { required: "Confirmação de senha é obrigatória" })}
                                        className={`md:w-[26rem] md:h-[2.3125rem] border-2 rounded-md bg-transparent p-3 md:text-[1.125rem] text-[0.95rem] w-full h-[2.2rem] focus:outline-none focus:border-blue-500 transition ${errors.confirmPassword ? 'border-red-500' : 'border-c-Azul'}`}
                                    />
                                    {errors.confirmPassword && <span className="text-red-500 text-[0.7rem] mt-0.5 block leading-tight">{errors.confirmPassword.message}</span>}

                        <button
                            type="submit"
                            className="md:w-[26rem] w-full md:h-[2.3125rem] h-[2.2rem] md:text-[1.5rem] text-[1.1rem] bg-c-Azul text-c-creme font-bold rounded-md mt-2 transition hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
                            disabled={loading}
                        >
                            {loading ? "Registrando..." : "Registrar"}
                        </button>
                        {message && <p className="text-center text-red-500 mt-2">{message}</p>}
                    </div>
                </form>
            </div>
                            <div className="md:bg-gradient-to-r from-[#26A6D5] to-[#001425] bg-transparent md:w-[39.25rem] md:h-[39.875rem] rounded-r-xl text-c-creme flex flex-col items-center justify-center">
                                <img src="/SimbolBg-P.png" alt="Logo Horus" className="md:w-[12.5rem] md:mb-10" />
                                <h2 className="md:hidden text-[2.5rem] font-bold">Registro</h2>
                                <h1 className="md:text-[2.5rem] md:block hidden font-bold text-center">Já possui conta?</h1>
                                <h2 className="md:text-[2rem] md:block hidden text-center">Faça login agora e desfrute <br /> de nossos recursos</h2>
                                <Link to={'/Login'}>
                                    <button className="md:w-[26rem] md:h-[2.3125rem] md:text-[1.5rem] bg-transparent text-c-creme border-2 border-c-creme font-bold rounded-md mt-5 md:block hidden transition hover:bg-c-creme/10">Login</button>
                                </Link>
                            </div>
        </section>
    );
}

export default Registro;