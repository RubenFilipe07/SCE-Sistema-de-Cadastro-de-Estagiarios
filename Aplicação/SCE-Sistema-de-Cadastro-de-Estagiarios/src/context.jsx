import { createContext, useState } from 'react';

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


  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, handleLogout, token, setToken, user, setUser, empresa, setEmpresa  }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;