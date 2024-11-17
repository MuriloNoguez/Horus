import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Register({ users, setUsers}) {
    const {register, handleSubmit, reset} = useForm();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const habdleRegister = (data) => {
        if (data.password !== data.confirmPassword) {
            setMessage('As senhas não conferem');
            return;
        }

        const userExists = users.some(user => user.email === data.email);
        if (userExists) {
            setMessage('Usuário já cadastrado');
            return;
        }

        const newUser = {
            email: data.email,
            nome: data.nome,
            cpf: data.cpf,
            password: data.password,
        };

        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setMessage('Usuário cadastrado com sucesso');
        reset();
        navigate('/Page-Clientes');
    };

    return(
        <>

        </>
    )
}