const usuariosServices = require('../services/UsuariosServices');

//usuariosServices.listar();
let novoUsuario = {
    nome: "thiago",
    email: "thiago@dousuario.com",
    senha: "senha_do_usuario_sem_criptografar",
    endereco: "Rua dos usuários, nº 256. Usuariolândia-BA"
}
usuariosServices.cadastrar(novoUsuario);

