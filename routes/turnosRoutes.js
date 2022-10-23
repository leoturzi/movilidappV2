var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res) {
    const turnos = await db.Turno.findAll();
    res.send(turnos);
});

module.exports = router;
