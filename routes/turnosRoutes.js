var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('turno');
});

router.get('/consultar_turno', (req, res) => {
    res.render('mostrarTurno');
});

router.get('/cargar_turno', (req, res) => {
    res.render('cargarTurno');
});

router.post('/cargar_turno', (req, res) => {
    res.render('cargarTurno');
});

router.get('/editar_turno', (req, res) => {
    res.render('editarTurno');
});

router.put('/editar_turno', (req, res) => {
    res.render('editarTurno');
});

module.exports = router;
