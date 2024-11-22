import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Register({ users, setUsers}) {
    const {register, handleSubmit, reset} = useForm();
    const [setMessage] = useState('');
    const navigate = useNavigate();

    const habdleRegister = (data) => {
        if (data.password !== data.confirmPassword) {
            setMessage('As senhas não conferem');
            return;
        }

        const userExists = users.some(user => user.email === data.email|| user.cpf === data.cpf);
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

        fetch("http://localhost:3000/users",{
            method: 'POST',
            body: JSON.stringify(newUser)
        });
        setMessage('Usuário cadastrado com sucesso');
        reset();
        navigate('/Page-Clientes');
    };

    return(
        <>

        </>
    )
}