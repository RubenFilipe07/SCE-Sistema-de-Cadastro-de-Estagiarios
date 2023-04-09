import React, { Fragment } from "react";

import FooterContent from "../components/Footer/Footer";

import { Layout} from "antd";
import MenuContent from "../components/Menu/MenuContent";
import HomeContent from "../components/HomeContent/HomeContent";


const { Header, Content, Footer } = Layout;
const Home = () => (
    <Fragment>
        <Layout>
            <Header>
                <MenuContent />
            </Header>

            <Content>
                <HomeContent />
            </Content>

            <Footer>
               <FooterContent />
            </Footer>

          
        </Layout>
    </Fragment>
);

export default Home;