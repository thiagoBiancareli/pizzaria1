// - Importar o express
const express = require("express");

// - Criar o servidor app
const servidor = express();

// - Definir rota neste servidor
// - Endereço, método, função callback (acão que o servidor vai realizar qiando a req chegar);
servidor.get('/usuarios', (req, res)=>{
    console.log("Chegou uma requisição");
    //return res.send("Permaneça em linha!");
    res.sendFile(__dirname + '/views/index.html')
});

// - Por o servidor pra rodar "Aguardando requisição"
servidor.listen(3000);