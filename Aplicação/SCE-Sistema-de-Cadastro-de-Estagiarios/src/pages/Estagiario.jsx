import React, { Fragment } from "react";

import FooterContent from "../components/Footer/Footer";

import { Layout} from "antd";
import MenuContent from "../components/Menu/MenuContent";
import ListaEstagiario from "../components/ListaEstagiario/ListaEstagiario";


const { Header, Content, Footer } = Layout;
const Home = () => (
    <Fragment>
        <Layout>
            <Header>
                <MenuContent />
            </Header>

            <Content>
                <ListaEstagiario />
            </Content>

            <Footer>
               <FooterContent />
            </Footer>

          
        </Layout>
    </Fragment>
);

export default Home;