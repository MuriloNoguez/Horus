import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 

export function Login() {
        const [email, setEmail] = useState(''); 
        const [password, setPassword] = useState(''); 
        const [error, setError] = useState(''); 
        const navigate = useNavigate();
        
        const handleLogin = (e) => { 
            e.preventDefault();
            const storedUsers = JSON.parse(localStorage.getItem('users')) || []; 
            const user = storedUsers.find(u => u.email === email && u.password === password); 
            if (user) { navigate('/Page-Clientes');
            } else { setError('Email ou senha inválidos'); 

            } 
        };

        return (
            <div>

            </div>
        );
    
}