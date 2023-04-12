import React, { createContext, useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate  } from 'react-router-dom';
import Catalogue from './containers/Catalogue';
import AjoutBien from './containers/Ajout-bien-immobilier';
import Home from './containers/Home';
import GestionFinanciere from './containers/Gestion-Financiere';
import BienImmobilier from './containers/BienImmobilier';
import LoginPage from './containers/Login/login';

export const UserContext = createContext(null);

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if(sessionStorage.getItem('user')){
      setUser(JSON.parse(sessionStorage.getItem('user')));
    }
  }, []);

  const setUserHandler = (userData) => {
    sessionStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
    navigate('/home')
  };

  const logout = () => {
    sessionStorage.removeItem('user')
    console.log(sessionStorage.getItem('user'))
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
            <Route path="/Gestion-Financiere" element={<GestionFinanciere />} />
            <Route path="/logout" element={logout()} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </>
        ) : (
          <>
            <Route
              path="/"
              element={<LoginPage />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </UserContext.Provider>
  );
}

export default App;