const express = require('express');
const path = require('path');
const app = express();

// Caminho absoluto para a pasta "dist" gerada pelo Vite
const distPath = path.join(__dirname, 'dist');

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(distPath));

// Redirecionar todas as rotas para o index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Porta que o servidor vai escutar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});