var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 6;

    var idvoto = req.params.idvoto;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idvoto, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

        
function buscarMedidasEmTempoReal(req, res) {

    var idvoto = req.params.idvoto;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idvoto).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmIndicadores(req,res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmIndicadores().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



function buscarMedidasEmcoments(req,res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmcoments().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}




function salvar(req, res) {
  const video = req.file.filename;

  const {fkusuario, relato} = req.body

  const usuario = { fkusuario, relato, video }
  
  usuarioModel.salvar(usuario)
  .then(resultado => {
    res.status(201).send("Usuario criado com sucesso");
  }).catch(err => {
    res.status(500).send(err);
  });
}

function buscarUsuarioPelaFk(req, res) {
  console.log(req.params.id);
  usuarioModel.buscarUsuarioPelaFk()
  .then(resultado => {
    res.json({
    relatos: resultado
  });
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}


function buscarRelatos(req, res) {
    medidaModel.buscarRelatos() // ou usuarioModel.buscarRelatos()
    .then(function(resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum relato encontrado!");
        }
    }).catch(function(erro) {
        console.log("Erro ao buscar relatos:", erro);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMedidasEmIndicadores,
    buscarMedidasEmcoments,
    salvar,
    buscarUsuarioPelaFk,
    buscarRelatos

}