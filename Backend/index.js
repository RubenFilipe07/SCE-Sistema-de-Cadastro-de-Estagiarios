const express = require('express');
const app = express();
const port = 8080;

const cors = require('cors');
app.use(cors());

require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

app.use(express.json()); 

app.use((req, res, next) => {
    const apiKey = req.headers['api-key'];
    if (apiKey === process.env.API_KEY) {
        next();
    } else {
        res.status(401).send('API Key inválida');
    }
});


pool.query(`
    CREATE TABLE IF NOT EXISTS empresas (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL,
        cnpj TEXT NOT NULL,
        email TEXT NOT NULL,
        senha TEXT NOT NULL
    )
`, (err, result) => {
    if (err) {
        console.error('Erro ao criar tabela empresas:', err);
    } else {
        console.log('Tabela empresas criada com sucesso');

        pool.query(`
            CREATE TABLE IF NOT EXISTS estagiarios (
                id SERIAL PRIMARY KEY,
                nome TEXT NOT NULL,
                cpf TEXT NOT NULL,
                email TEXT NOT NULL,
                telefone TEXT NOT NULL,
                curso TEXT NOT NULL,
                periodo TEXT NOT NULL,
                instituicao TEXT NOT NULL,
                carga_horaria TEXT NOT NULL,
                empresa_id INTEGER REFERENCES empresas(id)
            )
        `, (err, result) => {
            if (err) {
                console.error('Erro ao criar tabela estagiarios:', err);
            } else {
                console.log('Tabela estagiarios criada com sucesso');
            }
        });

    }
});

app.post('/cadastro', (req, res) => {
    const { nome, cnpj, email, senha } = req.body;
    pool.query('INSERT INTO empresas (nome, cnpj, email, senha) VALUES ($1, $2, $3, $4)', [nome, cnpj, email, senha ], (err, result) => {
        if (err) {
            res.status(500).send(err.toString());
        } else {
            res.json({ status: 'success', message: 'Cadastrado com sucesso!' });
        }
    });
});

app.get('/empresas/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT nome, cnpj, email FROM empresas WHERE id = $1', [id], (err, result) => {
        if (err) {
            res.status(500).send(err.toString());
        } else {
            res.json(result.rows[0]);
        }
    });
});


app.post('/login', (req, res) => {
    const { email, senha } = req.body;
  
    pool.query('SELECT id, nome, email FROM empresas WHERE email = $1 AND senha = $2', [email, senha], (err, result) => {
      if (err) {
        res.status(500).send(err.toString());
      } else if (result.rows.length === 0) {
        res.status(401).send('Email ou senha inválidos');
      } else {
        const { id, nome, email } = result.rows[0];
        const token = jwt.sign({ id, nome, email }, process.env.JWT_SECRET);
        res.json({ token });
      }
    });
  });


    app.post('/estagiarios', (req, res) => {
        const { nome, cpf, email, telefone, curso, periodo, instituicao, carga_horaria, empresa_id } = req.body;
        pool.query('INSERT INTO estagiarios (nome, cpf, email, telefone, curso, periodo, instituicao, carga_horaria, empresa_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [nome, cpf, email, telefone, curso, periodo, instituicao, carga_horaria, empresa_id], (err, result) => {
            if (err) {
                res.status(500).send(err.toString());
            } else {
                res.json({ status: 'success', message: 'Cadastrado com sucesso!' });
            }
        });
    });

    app.get('/estagiarios', (req, res) => {
        pool.query('SELECT * FROM estagiarios', (err, result) => {
            if (err) {
                res.status(500).send(err.toString());
            } else {
                res.json(result.rows);
            }
        });
    });

    app.get('/estagiarios/:id', (req, res) => {
        const id = req.params.id;
        pool.query('SELECT * FROM estagiarios WHERE id = $1', [id], (err, result) => {
            if (err) {
                res.status(500).send(err.toString());
            } else {
                res.json(result.rows[0]);
            }
        });
    });

    app.put('/estagiarios/:id', (req, res) => {
        const id = req.params.id;
        const { nome, cpf, email, telefone, curso, periodo, instituicao, carga_horaria } = req.body;
        pool.query('UPDATE estagiarios SET nome = $1, cpf = $2, email = $3, telefone = $4, curso = $5, periodo = $6, instituicao = $7, carga_horaria = $8 WHERE id = $9', [nome, cpf, email, telefone, curso, periodo, instituicao, carga_horaria, id], (err, result) => {
            if (err) {
                res.status(500).send(err.toString());
            } else {
                res.json({ status: 'success', message: 'Atualizado com sucesso!' });
            }
        });
    });

    app.delete('/estagiarios/:id', (req, res) => {
        const id = req.params.id;
        pool.query('DELETE FROM estagiarios WHERE id = $1', [id], (err, result) => {
            if (err) {
                res.status(500).send(err.toString());
            } else {
                res.json({ status: 'success', message: 'Deletado com sucesso!' });
            }
        });

    });


            
app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`)
});