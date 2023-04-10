import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Home from '../pages/Home'

const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home />}></Route>
                <Route path='/cadastro' element={<Cadastro />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PublicRoutes;