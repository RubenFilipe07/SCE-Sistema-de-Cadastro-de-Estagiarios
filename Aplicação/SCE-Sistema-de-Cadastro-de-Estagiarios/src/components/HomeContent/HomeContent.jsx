import './HomeContent.css';
import { Button, Col, Row } from 'antd';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context';

import { UserOutlined } from '@ant-design/icons';
const HomeContent = () => {

    const { isAuth, user } = useContext(AuthContext);
    
    return (
        <div className="home-content">
            {isAuth && (
                <>
                    <h1 className="home-title">Bem-vindo ao SCE</h1>
                    <h3>{user.email}</h3>
                </>
            )
            }
            <img src={logo} alt='logo' />
            <p className="home-text">Sistema de Cadastro de Estagiários</p>

            {!isAuth && (
                <Row>
                    <Col span={12}>
                        <Link to="/cadastro">
                            <Button style={{ backgroundColor: '#b8f397', borderColor: '#072100' }}>Cadastre-se</Button>
                        </Link>
                    </Col>
                    <Col span={12}>
                        <Link to={"https://github.com/RubenFilipe07/SCE-Sistema-de-Cadastro-de-Estagiarios"}>
                            <Button style={{ backgroundColor: '#bbebec', borderColor: '#002020' }} >Saiba mais</Button>
                        </Link>
                    </Col>
                </Row>

            )}


            <p className='home-description'>
                Esta plataforma permite que empresas e instituições possam cadastrar e gerenciar os seus estagiários, bem como visualizar suas atividades e relatórios,
                de forma simples e eficiente a fim de facilitar a analise de seus respectivos desempenhos.
            </p>

            {isAuth && (
            <Link to="/estagiarios">
                <Button type='primary' icon={<UserOutlined/>}>Gerenciar Estagiários</Button>
            </Link>
            )}

        </div>
    )
}

export default HomeContent;