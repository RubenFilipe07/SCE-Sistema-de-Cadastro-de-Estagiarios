import React from "react";
import { Link } from "react-router-dom";
import { Menu, Row, Col } from "antd";
import icon from '../../assets/logo.png';
import './Menu.css';


import {
    LoginOutlined,
    FormOutlined
} from '@ant-design/icons';

const menuItems = [
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

const MenuContent = () => (
    <div className="menu">
        <Row>
            <Col span={16}>
                <Link to="/">
                    <img className="logo-menu" src={icon} alt="Icone" width={50} height={50} />
                </Link>
                <h1 className="titulo-menu"><Link to="/">Gestor Fiscal</Link></h1>
            </Col>

            <Col span={8}>
                <Menu items={menuItems} mode="horizontal" theme="dark" />
            </Col>
        </Row>
    </div>
);

export default MenuContent;