import { useEffect, createContext, useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Catalogue from './containers/Catalogue';
import AjoutBien from './containers/Ajout-bien-immobilier';
import Home from './containers/Home';
import BienImmobilier from './containers/BienImmobilier';
import LoginPage from './containers/Login/login';
import Account from './containers/Account/Account'

export const UserContext = createContext(null);

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      setUser(JSON.parse(sessionStorage.getItem('user')));
    }
  }, []);

  useEffect(() => {
    const handleLogout = () => {
      setUser(null)
      sessionStorage.removeItem('user')
      navigate('/')
    };
  
    const path = window.location.pathname
    if (path === '/logout') {
      handleLogout()
    }
  }, [navigate]);

  const setUserHandler = (userData) => {
    setUser(userData);
    sessionStorage.setItem('user', JSON.stringify(userData));
    navigate('/home');
  };

  return (
    <UserContext.Provider value={{ user, setUserHandler }}>
      <Routes>
        {user ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/Catalogue" element={<Catalogue />} />
            <Route path="/BienImmobilier" element={<BienImmobilier />} />
            <Route path="/Ajout-bien-immobilier" element={<AjoutBien />} />
            <Route path="/Account" element={<Account />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
