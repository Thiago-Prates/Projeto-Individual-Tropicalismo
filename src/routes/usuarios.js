var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/cont_caetano", function (req, res) {
    usuarioController.cont_caetano(req, res);
})

router.post("/cont_gil", function (req, res) {
    usuarioController.cont_gil(req, res);
})

router.post("/cont_gal", function (req, res) {
    usuarioController.cont_gal(req, res);
})

router.post("/cont_mut", function (req, res) {
    usuarioController.cont_mut(req, res);
})

router.post("/cont_tor", function (req, res) {
    usuarioController.cont_tor(req, res);
})

router.post("/cont_nara", function (req, res) {
    usuarioController.cont_nara(req, res);
})

router.post("/coment", function (req, res) {
    usuarioController.coment(req, res);
})

module.exports = router;