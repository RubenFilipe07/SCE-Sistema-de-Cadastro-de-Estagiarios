import React from "react";
import { Link } from "react-router-dom";
import { Menu, Row, Col, Button } from "antd";
import icon from '../../assets/logo.png';
import './Menu.css';
import { useContext } from 'react';
import { AuthContext } from '../../context';

import {
    LoginOutlined,
    FormOutlined,
    UserOutlined,
    LogoutOutlined,
    UserAddOutlined
} from '@ant-design/icons';



const MenuContent = () => {

    const { isAuth, handleLogout } = useContext(AuthContext);

    const menuItemsNotLogged = [
        {
            key: 'Cadastro',
            icon: <FormOutlined />,
            label: (<Link to="/cadastro">Cadastro</Link>),
        },
        {
            key: 'Login',
            icon: <LoginOutlined />,
            label: (<Link to="/login">Login</Link>),
        }
            
    ];
    
    const menuItemsLogged = [
        {
            key: 'Gerenciar Estágiarios',
            icon: <UserOutlined />,
            label: (<Link to="/estagiarios">Gerenciar Estágiarios</Link>),
        },
        {
            key: 'Cadastrar Estágiarios',
            icon: <UserAddOutlined />,
            label: (<Link to="/cadastroEstagiarios">Cadastrar Estágiarios</Link>),
        },
        {
            key: 'Login',
            label: (<Button style={{backgroundColor: "#e52222", color: "white", borderColor: "#e52222"}} onClick={()=>{handleLogout()}} icon={<LogoutOutlined/>} >Sair</Button>),
        }
            
    ];


    return (
    <div className="menu">
        <Row>
            
            <Col span={16}>
                <Link to="/">
                    <img className="logo-menu" src={icon} alt="Icone" width={50} height={50} />
                </Link>
                <h1 className="titulo-menu"><Link to="/">Gestor Fiscal</Link></h1>
            </Col>

            <Col span={8}>
                {!isAuth && <Menu items={menuItemsNotLogged} mode="horizontal" theme="dark" />}
                {isAuth && <Menu items={menuItemsLogged} mode="horizontal" theme="dark" />}
            </Col>
        </Row>
    </div>
)
}

export default MenuContent;