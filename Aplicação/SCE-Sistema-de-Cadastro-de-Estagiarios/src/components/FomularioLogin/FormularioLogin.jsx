import './FormularioLogin.css';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { message } from 'antd';
import { AuthContext } from '../../context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const FormularioLogin = () => {
    const { isAuth, setIsAuth, setToken, setUser, empresa, setEmpresa } = useContext(AuthContext);

    const navigate = useNavigate();
   

    const decryptToken = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const user = JSON.parse(window.atob(base64));
        return user;
    }
    
    const getEmpresaData = async (id) => {
        try {
        axios.get(`https://api-sce.fly.dev/empresas/${id}`, { headers: { 'api-key': import.meta.env.VITE_API_KEY } })
            .then((response) => {

               setEmpresa(response.data);
               console.log(response.data);
            })
        } catch (error) {
            console.log(error);
        }
    }


  
    const onFinish = async ({ email, senha }) => {
        try {
            const response = await axios.post('https://api-sce.fly.dev/login', { email, senha }, { headers: { 'api-key': import.meta.env.VITE_API_KEY, } });
            const { token } = response.data;
            localStorage.setItem('token', token);
            message.success('Login efetuado com sucesso!');
            setIsAuth(true);     
            getEmpresaData(decryptToken(token).id);
            sessionStorage.setItem('token', token);
            setToken(token);
            const userData = decryptToken(token);
            console.log(userData);
            setUser(userData);

            navigate('/');

        } catch (error) {
            if (error.response.status === 401) {
                message.error('Email ou senha inválidos');
            } else {
                message.error('Ocorreu um erro ao efetuar o login. Tente novamente mais tarde.');
            }
        }
    };

        return (

            <Form className='form-login' onFinish={onFinish}>
                <h1 className='titulo-form'>Login</h1>

                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Insira o seu email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Senha" name="senha" rules={[{ required: true, message: 'Insira a sua senha' }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Entrar
                    </Button>
                </Form.Item>
            </Form>


        )
    }

    export default FormularioLogin;