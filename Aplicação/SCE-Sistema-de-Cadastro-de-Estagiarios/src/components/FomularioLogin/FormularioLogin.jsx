import './FormularioLogin.css';
import {Form, Input, Button } from 'antd';

const FormularioLogin = () => {
    return (
     <Form className='form-login'>
            <h1 className='titulo-form'>Login</h1>

            <Form.Item label="Email">
                <Input placeholder="empresa@mail.com" />
            </Form.Item>

            <Form.Item label="Senha">
                <Input placeholder="********" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="button-form">
                    Login
                </Button>
            </Form.Item>

     </Form>
     
     
     )
}

export default FormularioLogin;