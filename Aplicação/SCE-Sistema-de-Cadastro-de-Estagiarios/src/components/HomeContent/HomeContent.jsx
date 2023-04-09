import './HomeContent.css';
import { Button, Col, Row } from 'antd';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const HomeContent = () => (
    <div className="home-content">
        <h1 className="home-title">Bem-vindo ao SCE</h1>
        <img src={logo} alt='logo' />
        <p className="home-text">Sistema de Cadastro de Estagiários</p>


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

        <p className='home-description'>
            Esta plataforma permite que empresas e instituições possam cadastrar e gerenciar os seus estagiários, bem como visualizar suas atividades e relatórios,
            de forma simples e eficiente a fim de facilitar a analise de seus respectivos desempenhos.
        </p>

    </div>
);

export default HomeContent;