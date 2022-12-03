// - Importar o express
const express = require("express");
const path = require("path");
// - Criar o servidor app
const servidor = express();

// - Definir a pasta public como sendo a pasta de arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')))

// - Endereço, método, função callback (acão que o servidor vai realizar qiando a req chegar);
servidor.get('/', (req, res)=>{
    console.log("Chegou uma requisição");
    //return res.send("Permaneça em linha!");

    res.sendFile(__dirname + '/views/index.html')
});

servidor.get('/carrinho',(req, res)=>{
    return res.sendFile(__dirname + '/views/carrinho.html');
})

servidor.get('/perfil',(req, res)=>{
    return res.sendFile(__dirname + '/views/perfil.html')
})

// - Por o servidor pra rodar "Aguardando requisição"
servidor.listen(3000);