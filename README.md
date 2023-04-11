# SCE-Sistema-de-Cadastro-de-Estagiarios

Plataforma que visa facilitar o cadastro e gerenciamento de estagiários por empresas, por meio de um sistema de login e crud de dados, foi desenvolvido com as tecnologias React, Node e PostgresSQL. 
Quando uma empresa está cadastrada e devidamente autenticada, ela consegue cadastrar e gerenciar seus estagiários com suas devidas informações.

<h3>Links</h3>
<a href="https://sistema-cadastro-estagiarios.web.app">Aplicação - https://sistema-cadastro-estagiarios.web.app</a> </br>
<a href="https://api-sce.fly.dev">API REST - https://api-sce.fly.dev</a>

<h3>Como instalar o projeto</h3>

<ol>
  <li>Clone o repositório com o comando: <code>git clone https://github.com/RubenFilipe07/SCE-Sistema-de-Cadastro-de-Estagiarios/</code> </li>
</ol>

<h5>Para rodar o projeto React</h5>
<ol>
  <li>Certifique-se de ter o node.js instalado na sua máquina, caso não tenha, baixe aqui: <a href="https://nodejs.org/en/">nodejs.org</a></li>
  <li>Na raiz do projeto <code>Aplicação/SCE-Sistema-de-Cadastro-de-Estagiarios</code> digite <code>npm i</code> no terminal para baixar as dependências</li>
  <li>Digite <code>npm run dev</code> para iniciar o servidor e o acesse pelo link: <code>http://localhost:3000/</code></li>
</ol>

<h5>arquivo .ENV</h5>
<code>API_KEY:</code>: Chave de autenticação que autoriza a utilização da API.<br/>
<code>VITE_API_KEY :</code>: Chave de autenticação autoriza o request da API do lado do cliente.<br/>
<code>DATABASE_URL</code>:  URL que faz conexão com banco de dados. <br/>
<code>JWT_SECRET</code>:  Uma chave secreta usada para assinar e verificar tokens JWT (JSON Web Tokens) usados para autenticar usuários. <br/>

<h5>Para rodar o projeto Node</h5>
<ol>
  <li>Na raiz do projeto execute<code>npm i</code> para instalar as dependências</li>
  <li>Crie um arquivo .ENV e adicione as variáveis de ambiente (descritas acima)</li>
  <li>Instale o PostgreSQL.js: <a href="https://www.postgresql.org/download/">postgresql.org</a> </li>
  <li>Execute <code>node index.js</code> para iniciar a aplicação</li>
  <li>O projeto rodará em: <code>https://localhost:8080/</code></li>
</ol>

<h3>Demonstração não autenticado</h3>

<h4>Home</h4>
<img src="https://user-images.githubusercontent.com/53026536/231095739-83273926-33b5-4bc2-9a43-91b34cf06c9e.png" width="1200"/>
<h4>Cadastro (Empresa)</h4>
<img src="https://user-images.githubusercontent.com/53026536/231095750-52724b92-e716-4ac2-b3e8-9b51e112029e.png" width="1200"/>
<h4>Login (Empresa)</h4>
<img src="https://user-images.githubusercontent.com/53026536/231095765-a9abc108-698a-45ee-8705-d1aa1037ca87.png" width="1200"/>

<h3>Demonstração autenticado</h3>
<h4>Home</h4>
<img src="https://user-images.githubusercontent.com/53026536/231095784-411ab0a9-9558-49d5-9b80-a59ce96bdf75.png" width="1200"/>
<h4>Cadastro estagiário</h4>
<img src="https://user-images.githubusercontent.com/53026536/231095797-a1cae297-b664-4edc-8e55-4fd60e93334d.png" width="1200"/>
<h4>Lista estagiários</h4>
<img src="https://user-images.githubusercontent.com/53026536/231097368-60975fb8-0d8c-458c-876b-d5333c1aa3dd.png" width="1200"/>

 <h3>Rotas Públicas</h3>
 <code>/</code> Página home  </br>
 <code>/cadastro</code> Página de cadastro da empresa  </br>
 <code>/login</code> Página de login da empresa </br>
    
 <h3>Rotas Privadas</h3>
 <code>/</code> Página home </br>
 <code>/estagiarios</code> Página de listagem de estagiários  </br>
 <code>/cadastroEstagiarios</code> Página de cadastro de estagiários
 
 <h3>Tecnologias utilizadas</h3>

<h3>Front-end</h3>


  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  </a> <br/>
  
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/React.jS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  </a> <br/>
  
  <a href="https://reactrouter.com/en/main">
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  </a> <br/>
  
  <a href="https://axios-http.com/docs/intro">
    <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  </a> <br/>
 
  <a href="https://ant.design">
    <img src="https://img.shields.io/badge/Ant%20design-007DB8?style=for-the-badge&logo=antdesign&logoColor=white" />
  </a> <br/>
  
  <a href="https://ant.design/docs/spec/icon">
    <img src="https://img.shields.io/badge/Ant%20design%20Icons-007DB8?style=for-the-badge&logo=antdesign&logoColor=white" />
  </a> <br/>
 
  
 <h3>Back-end</h3>

<a href="https://nodejs.org/">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
</a> <br/>

<a href="https://expressjs.com/">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
</a> <br/>

<a href="https://www.npmjs.com/package/jsonwebtoken">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"/>
</a> <br/>


<a href="https://www.npmjs.com/package/cors">
  <img src="https://img.shields.io/badge/Cors-000000?style=for-the-badge"/>
</a> <br/>

<a href="https://www.npmjs.com/package/dotenv">
  <img src="https://img.shields.io/badge/dotenv-000000?style=for-the-badge"/>
</a> <br/>

 <h3>Banco de dados</h3>
 
  <a href="https://www.postgresql.org/">
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  </a> <br/>
   

 <h3>Hospedagem</h3>
 
  <a href="https://firebase.google.com/">
    <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" />
  </a> <br/>
  
  <a href="https://fly.io/">
    <img src="https://img.shields.io/badge/Fly.IO-9c31e2?style=for-the-badge" />
  </a> <br/>
  

<h3>Licensa</h3>

  <a href="https://github.com/RubenFilipe07/SCE-Sistema-de-Cadastro-de-Estagiarios/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
  </a>
