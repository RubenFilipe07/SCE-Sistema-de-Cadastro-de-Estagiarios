import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Estagiarios from '../pages/Estagiario'

const PrivateRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/estagiarios" element={<Estagiarios />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PrivateRoutes;