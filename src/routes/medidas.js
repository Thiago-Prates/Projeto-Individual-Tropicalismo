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

module.exports = router;

