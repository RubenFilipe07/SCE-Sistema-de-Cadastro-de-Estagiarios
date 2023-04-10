import './App.css';
import 'antd/dist/reset.css';
import 'antd/dist/antd.js';
import { useContext } from 'react';
import { AuthContext } from './context';
import PrivateRoutes from './routes/privates.routes';
import PublicRoutes from './routes/public.routes';

function App() {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <PrivateRoutes /> : <PublicRoutes />;
}

export default App;
