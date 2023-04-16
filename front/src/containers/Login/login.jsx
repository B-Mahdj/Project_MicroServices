import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import styles from './login.module.css';
import axios from 'axios';

const LoginPage = () => {
  const { setUserHandler } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios.get('http://localhost:8080/login', {
        params: {
            email: email,
            password: password
        }
        })
        .then(response => {
          setUserHandler(response.data);
        })
        .catch(error => {
            console.error(error);
    });
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerTitle}>
        Bienvenue, veuillez-vous connecter !
      </div>
      <div className={styles.container}>
        <h1 className={styles.heading}>Se connecter</h1>
        <form className={styles.formContainer} onSubmit={handleLogin}>
          <div className={styles.formControl}>
            <label htmlFor="email">Adresse e-mail :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>Connexion</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
