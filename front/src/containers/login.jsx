import React, { useContext, useState } from 'react';
import { UserContext } from '../App';

const LoginPage = () => {
    const { setUserHandler } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const username = email.split("@")[0];
        const user = { name : username, email, password };
        setUserHandler(user);
    };

    return (
        <div>
        <h1>Se connecter</h1>
        <form onSubmit={handleLogin}>
            <label htmlFor="email">Adresse e-mail :</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password">Mot de passe :</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Connexion</button>
        </form>
        </div>
    );
};

export default LoginPage;