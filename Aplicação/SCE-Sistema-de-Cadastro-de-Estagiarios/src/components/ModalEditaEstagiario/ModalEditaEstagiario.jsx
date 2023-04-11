import React, { useEffect, useState } from "react";
import { Form, Input, Button, Modal, message } from "antd";
import { SaveFilled } from "@ant-design/icons";
import axios from "axios";

const ModalEditaEstagiario = (props) => {
  const { visible, handleCancel, id } = props;
  const [estagiarioSelecionado, setEstagiarioSelecionado] = useState({});

  useEffect(() => {
    getEstagiario();
  }, []);

  const getEstagiario = () => {
    axios
      .get(`https://api-sce.fly.dev/estagiarios/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": import.meta.env.VITE_API_KEY,
        },
      })
      .then((response) => {
        setEstagiarioSelecionado(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const alteraItem = (estagiario) => {
    axios.put(`https://api-sce.fly.dev/estagiarios/${id}`, estagiario, {
        headers: {
          "Content-Type": "application/json",
          "api-key": import.meta.env.VITE_API_KEY,
        },
      })
      .then((response) => {
       
        message.success("Estagiário alterado com sucesso!");
        handleCancel();
      })
      .catch((error) => {
        console.log(estagiario);
        message.error("Estagiário não alterado!");
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEstagiarioSelecionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Modal
      title={`Atualizar estagiário`}
      visible={visible}
      footer={null}
      onCancel={handleCancel}
      destroyOnClose={true}
    >
      <Form>
      <Form.Item>
          <Input
            placeholder="Email"
            name="email"
            value={estagiarioSelecionado.email}
            onChange={handleInputChange}
            rules={[{ required: true, message: 'Por favor, insira seu email!' }]}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Nome"
            name="nome"
            value={estagiarioSelecionado.nome}
            onChange={handleInputChange}
            rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="CPF"
            name="cpf"
            value={estagiarioSelecionado.cpf}
            onChange={handleInputChange}
            rules={[
                { required: true, message: 'Por favor, insira seu CPF!' },
                {
                    pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                    message: 'Por favor, insira um CPF válido! Ex.: 000.000.000-00',
                },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Telefone"
            name="telefone"
            value={estagiarioSelecionado.telefone}
            onChange={handleInputChange}
            rules={[
                { required: true, message: 'Por favor, insira seu telefone!' },
                {
                    pattern: /^\(\d{2}\)\s\d{4,5}\-\d{4}$/,
                    message: 'Por favor, insira um telefone válido! Ex.: (00) 00000-0000',
                },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Curso"
            name="curso"
            value={estagiarioSelecionado.curso}
            onChange={handleInputChange}
            rules={[{ required: true, message: 'Por favor, insira seu curso!' }]}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Período"
            name="periodo"
            value={estagiarioSelecionado.periodo}
            onChange={handleInputChange}
            rules={[{ required: true, message: 'Por favor, insira seu período!' }]}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Instituição"
            name="instituicao"
            value={estagiarioSelecionado.instituicao}
            onChange={handleInputChange}
            rules={[{ required: true, message: 'Por favor, insira sua instituição!' }]}
          />
        </Form.Item>
        <Form.Item>
            <Input
                placeholder="Carga Horária"
                name="carga_horaria"
                value={estagiarioSelecionado.carga_horaria}
                onChange={handleInputChange}
                rules={[{ required: true, message: 'Por favor, insira sua carga horária!' }]}
            />
        </Form.Item>

        <Form.Item>
            <Button
                type="primary"
                icon={<SaveFilled />}   
                onClick={() => alteraItem(estagiarioSelecionado)}   
            >
                Salvar
            </Button>
        </Form.Item>
        </Form>
    </Modal>
    );
};


export default ModalEditaEstagiario;