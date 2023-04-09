import React, { Fragment } from "react";

import FooterContent from "../components/Footer/Footer";

import { Layout} from "antd";
import MenuContent from "../components/Menu/MenuContent";
import FormularioCadastro from "../components/FomularioCadastro/FormularioCadastro";


const { Header, Content, Footer } = Layout;
const Home = () => (
    <Fragment>
        <Layout>
            <Header>
                <MenuContent />
            </Header>

            <Content>
              <FormularioCadastro />
            </Content>

            <Footer>
               <FooterContent />
            </Footer>

          
        </Layout>
    </Fragment>
);

export default Home;