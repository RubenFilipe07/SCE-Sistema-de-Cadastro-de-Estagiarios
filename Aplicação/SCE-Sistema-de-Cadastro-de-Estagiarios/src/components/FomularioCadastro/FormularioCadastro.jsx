import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

import './FormularioCadastro.css';

const FormularioCadastro = () => {
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {

        try {
            const response = await axios.post('https://api-sce.fly.dev/cadastro', values, {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': import.meta.env.VITE_API_KEY,
                },
            });
            message.success(response.data.message);
            form.resetFields();
        } catch (error) {
            message.error(error.response.data);
        }
    };

    return (
        <Form className='form-cadastro' onFinish={handleSubmit} form={form}>
            <h1 className='titulo-form'>Cadastro</h1>
            <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Por favor, insira seu email!' }]}
            >
                <Input type="email" />
            </Form.Item>
            
            <Form.Item
                name="nome"
                label="Nome"
                rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="cnpj"
                label="CNPJ"
                rules={[
                    { required: true, message: 'Por favor, insira seu CNPJ!' },
                    {
                        pattern: /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
                        message: 'Por favor, insira um CNPJ válido! Ex.: 00.000.000/0000-00',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="senha"
                label="Senha"
                rules={[
                    { required: true, message: 'Por favor, insira sua senha!' },
                    { min: 6, message: 'A senha deve ter no mínimo 6 caracteres!' },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Cadastrar
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormularioCadastro;