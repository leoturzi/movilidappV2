const express = require('express');
const router = express.Router();
const turnosController = require('../controllers/turnosController');

router.get('/', turnosController.mainTurnos);

router.get('/consultar_turno', (req, res) => {
    res.render('turnos/mostrarTurno');
});

router.get('/cargar_turno', (req, res) => {
    res.render('turnos/cargarTurno');
});

router.post('/cargar_turno', (req, res) => {
    res.render('cargarTurno');
});

router.get('/editar_turno', (req, res) => {
    res.render('turnos/editarTurno');
});

router.put('/editar_turno', (req, res) => {
    res.render('editarTurno');
});

module.exports = router;
