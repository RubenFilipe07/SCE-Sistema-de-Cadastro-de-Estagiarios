import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Estagiarios from '../pages/Estagiario'
import CadastroEstagiarios from '../pages/CadastroEstagiario'

const PrivateRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/estagiarios" element={<Estagiarios />} />
                <Route path="/cadastroEstagiarios" element={<CadastroEstagiarios />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PrivateRoutes;