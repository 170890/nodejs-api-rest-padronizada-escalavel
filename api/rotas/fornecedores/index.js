const roteador = require('express').Router();

app.use("/api/fornecedores", (req, res) => {
    res.send("OK");    
})

module.exports = roteador;