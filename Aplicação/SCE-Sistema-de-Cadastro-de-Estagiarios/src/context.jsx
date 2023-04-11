import { createContext, useState, useEffect } from 'react';
import jwt from 'jwt-decode';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [empresa, setEmpresa] = useState({});


  const handleLogout = () => {
    setIsAuth(false);
    setToken('');
    setUser({});
    setEmpresa({});

    localStorage.removeItem('token');
    sessionStorage.removeItem('token');

   window.location = '/';
    

  };


    useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      var decoded = jwt(token);
      setToken(token);
      setIsAuth(true);
      setUser(decoded);
      setEmpresa(decoded.id);
    }
  }, []);


  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, handleLogout, token, setToken, user, setUser, empresa, setEmpresa  }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;