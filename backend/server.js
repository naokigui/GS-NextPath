import express from 'express';
import cors from 'cors';
import { profissoes } from './dados.js'; 
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/professions', (req, res) => {
    try {
        res.json(profissoes);
    } catch (error) {
        res.status(500).json({ erro: "Erro interno do servidor" }); 
    }
});

app.use((req, res) => {
    res.status(404).json({ erro: "Rota não encontrada" });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});