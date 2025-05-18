var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idvoto", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idvoto", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/indicadores", function (req, res) {
    medidaController.buscarMedidasEmIndicadores(req, res);
})

router.get("/coments", function (req, res) {
    medidaController.buscarMedidasEmcoments(req, res);
})








const upload = require('../routes/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
const usuarioController = require('../controllers/usuarioController');

router.get("", (req, res) => {
  res.render("index")
});

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/cadastro', upload.single('video'), (req, res) => {
  usuarioController.salvar(req, res);
});

router.get('/:fkusuario', upload.single('video'), (req, res) => {
  usuarioController.buscarUsuarioPelaFk(req, res);
});

module.exports = router;

