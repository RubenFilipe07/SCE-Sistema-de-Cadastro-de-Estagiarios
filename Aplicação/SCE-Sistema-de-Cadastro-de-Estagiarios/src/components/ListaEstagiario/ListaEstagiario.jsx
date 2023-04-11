
import axios from 'axios';
import './ListaEstagiario.css';
import { Table, Space, Popconfirm, Button, message } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context';
import ModalEditaEstagiario from '../ModalEditaEstagiario/ModalEditaEstagiario';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';



const ListaEstagiario = () => {
    const { user } = useContext(AuthContext);

    const [estagiarios, setEstagiarios] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [idSelecionado, setIdSelecionado] = useState(0);

    const getEstagiarios = () => {
        axios.get('https://api-sce.fly.dev/estagiarios', {
            headers: {
                'Content-Type': 'application/json',
                'api-key': import.meta.env.VITE_API_KEY,
            },
        }).then(response => {
            setEstagiarios(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getEstagiarios();


    }, []);

    const deletaEstagiario = (id) => {
        axios.delete(`https://api-sce.fly.dev/estagiarios/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': import.meta.env.VITE_API_KEY,
            },
        }).then(response => {
            message.success("Estagiário deletado com sucesso!");
            getEstagiarios();
        }).catch(error => {
            message.error("Estagiário não deletado!");
        });
    };

    const editaEstagiario = (id) => {
        setIdSelecionado(id);
        setModalVisible(true);

    };

    const handleCancel = () => {
        setModalVisible(false);
    };



    const columns = [
        {
            title: 'Nome',
            dataIndex: 'nome',
            key: 'nome',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'CPF',
            dataIndex: 'cpf',
            key: 'cpf',
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Telefone',
            dataIndex: 'telefone',
            key: 'telefone',
        },
        {
            title: 'Curso',
            dataIndex: 'curso',
            key: 'curso',
        },
        {
            title: 'Periodo',
            dataIndex: 'periodo',
            key: 'periodo',
        },
        {
            title: 'Ação',
            key: 'acao',
            render: (record, index) => < div className="btn-wrap"
                key={index} >
                <Space size="small" >
                    <Popconfirm title="Tem certeza?" cancelText="Cancelar" onConfirm={() => deletaEstagiario(record.id)}>
                        <Button type="primary" danger >
                            <DeleteOutlined />
                            Apagar
                        </Button>
                    </Popconfirm>

                    <Button type="primary" onClick={() => editaEstagiario(record.id)}>
                        <EditOutlined />
                        Editar
                    </Button>
                </Space>
            </div >
        }


    ];




    return (
        <div className='lista-estagiario'>
            <Table columns={columns} dataSource={estagiarios.filter(estagiario => estagiario.empresa_id === user.id)} />
            <ModalEditaEstagiario
                visible={modalVisible}
                handleCancel={handleCancel}
                id={idSelecionado}
            />
        </div>
    );

};

export default ListaEstagiario;