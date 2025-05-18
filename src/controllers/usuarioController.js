var usuarioModel = require("../models/usuarioModel");
var usuarioModel = require("../models/usuarioModel");
var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length == 1) {
                    res.json({
                        id: resultadoAutenticar[0].id,
                        email: resultadoAutenticar[0].email,
                        nome: resultadoAutenticar[0].nome

                    });
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login");
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.cadastrar(nome, email, senha)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


function cont_caetano(req, res) {
    var fkusuario = req.body.fkusuarioServer;
    var fkartista = req.body.fkartistaServer;

    usuarioModel.cont_caetano(fkusuario, fkartista)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


function cont_gil(req, res) {
    var fkusuario = req.body.fkusuarioServer;
    var fkartista = req.body.fkartistaServer;

    usuarioModel.cont_gil(fkusuario, fkartista)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function cont_gal(req, res) {
    var fkusuario = req.body.fkusuarioServer;
    var fkartista = req.body.fkartistaServer;

    usuarioModel.cont_gal(fkusuario, fkartista)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


function cont_mut(req, res) {
    var fkusuario = req.body.fkusuarioServer;
    var fkartista = req.body.fkartistaServer;

    usuarioModel.cont_mut(fkusuario, fkartista)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function cont_tor(req, res) {
    var fkusuario = req.body.fkusuarioServer;
    var fkartista = req.body.fkartistaServer;

    usuarioModel.cont_tor(fkusuario, fkartista)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function cont_nara(req, res) {
    var fkusuario = req.body.fkusuarioServer;
    var fkartista = req.body.fkartistaServer;

    usuarioModel.cont_nara(fkusuario, fkartista)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function coment(req, res) {
    var fkusuario = req.body.fkusuarioServer;
    var descricao = req.body.descricaoServer;

    usuarioModel.coment(fkusuario, descricao)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}





function relatos(req, res) {

    var relato = req.body.relato;
    var fkusuario = req.body.fkusuarioServer;
    var video = req.file ? req.file.filename : null;

    if (!relato) {
        return res.status(400).send("Preencha todos os campos obrigatórios!");
    }

    usuarioModel.relatos(relato, video, fkusuario)
        .then((resultado) => res.status(200).json(resultado))
        .catch((erro) => {
            console.log("Erro no cadastro:", erro);
            res.status(500).json(erro.sqlMessage || erro.message);
        });
}





module.exports = {
    autenticar,
    cadastrar,
    cont_caetano,
    cont_gil,
    cont_gal,
    cont_mut,
    cont_tor,
    cont_nara,
    coment,
    relatos
};

