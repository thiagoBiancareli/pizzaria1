const usuarios = require('../databases/usuarios.json');
const bcrypt = require('bcrypt');
const fs = require('fs');

function listar(){
    // Seu código aqui
    // let listarUsuario = {
    //     id: 123,
    //     nome: 'Sofia',
    //     email: 'sofia@email.com'
    // }
    console.table(usuarios);
}

// function listarNomes(){
//     const nomes = usuario => {
//         return nome: usuario.nome,
        
//     }
//     let format = usuarios.map(nomes)
// }
console.table(format);

function salvar(arrayDeUsuarios){
    // Seu código aqui
    fs.writeFileSync('./databases/usuarios.json',JSON.stringify(arrayDeUsuarios,null, 4));
}

function cadastrar(objeto){
// Seu código aqui
let senhaCript = bcrypt.hashSync(objeto.senha, 10);
let idUnico = usuarios[usuarios.length -1].id +1;

let usuario = {
    id: idUnico,
    nome: objeto.nome,
    email: objeto.email,
    senha: senhaCript,
    enderecos: [objeto.endereco],
    formasDePagamamentos: []
}

usuarios.push(usuario);
salvar(usuarios);
}

function detalhar(idUsuario){
// Seu código aqui
}

function remover(idDoUsuarioParaRemover){
    // Seu código aqui
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

const UsuariosServices = {
    cadastrar,
    listar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;