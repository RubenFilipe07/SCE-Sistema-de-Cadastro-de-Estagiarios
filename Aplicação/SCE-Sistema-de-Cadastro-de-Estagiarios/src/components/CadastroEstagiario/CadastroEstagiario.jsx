import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

import './CadastroEstagiario.css';
import { useContext } from 'react';
import { AuthContext } from '../../context';

const CadastroEstagiario = () => {
    const { user } = useContext(AuthContext);
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {

        try {
            const response = await axios.post('https://api-sce.fly.dev/estagiarios', values, {
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
        <Form className='form-cadastro cadastro-estagiarios' onFinish={handleSubmit} form={form}>
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
                name="cpf"
                label="CPF"
                rules={[
                    { required: true, message: 'Por favor, insira seu CPF!' },
                    {
                        pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                        message: 'Por favor, insira um CPF válido! Ex.: 000.000.000-00',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="telefone"
                label="Telefone"
                rules={[
                    { required: true, message: 'Por favor, insira seu telefone!' },
                    {
                        pattern: /^\(\d{2}\)\s\d{4,5}\-\d{4}$/,
                        message: 'Por favor, insira um telefone válido! Ex.: (00) 00000-0000',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="curso"
                label="Curso"
                rules={[{ required: true, message: 'Por favor, insira seu curso!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="periodo"
                label="Período"
                rules={[{ required: true, message: 'Por favor, insira seu período!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="instituicao"
                label="Instituição"
                rules={[{ required: true, message: 'Por favor, insira sua instituição!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="carga_horaria"
                label="Carga Horária"
                rules={[{ required: true, message: 'Por favor, insira sua carga horária!' }]}
            >
                <Input />
            </Form.Item>

             
                <Form.Item
                    name="empresa_id"
                    initialValue={user.id}
                >
                    <Input  hidden/>
                </Form.Item>

            <Button type="primary" htmlType="submit">
                Cadastrar
            </Button>
        </Form>
    );
};

export default CadastroEstagiario;