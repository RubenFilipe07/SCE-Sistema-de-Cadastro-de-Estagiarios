import './FormularioCadastro.css';
import {Form, Input, Button, Checkbox} from 'antd';

const FormularioCadastro = () => {
    return (
     <Form className='form-cadastro'>
            <h1 className='titulo-form'>Cadastro</h1>
            <Form.Item label="Nome">
                <Input placeholder="Empresa" />
            </Form.Item>

            <Form.Item label="CNPJ">
                <Input placeholder="00.000.000/0001-01 " />
            </Form.Item>

            <Form.Item label="Email">
                <Input placeholder="empresa@mail.com" />
            </Form.Item>

            <Form.Item label="Senha">
                <Input placeholder="********" />
            </Form.Item>

            <Form.Item label="Confirmar Senha">
                <Input placeholder="********" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="button-form">
                    Cadastrar
                </Button>
            </Form.Item>

     </Form>
     
     
     )
}

export default FormularioCadastro;