const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Página Home");
});

app.get('/perfil', (req,res) => {
    res.send("Perfil do usuário");
})

app.listen(8000, () => console.log("Servidor Express rodando"));