import './App.css'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import 'antd/dist/reset.css';
import 'antd/dist/antd.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}></Route>
      <Route path='/cadastro' element={<Cadastro/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  </BrowserRouter>
  


    </div>
  )
}

export default App
