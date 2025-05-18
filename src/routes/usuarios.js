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




const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/"); // Crie esta pasta!
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.post("/relatos", upload.single('video'), function (req, res) {
    usuarioController.relatos(req, res);
});

router.get("/relatos", function (req, res) {
    medidaController.buscarRelatos(req, res);
});

const medidaController = require("../controllers/medidaController");
module.exports = router;
