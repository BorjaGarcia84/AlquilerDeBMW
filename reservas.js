const express = require('express');
const router = express.Router();
const dbConnection = require('./dbConnection');

class Reservas {
    constructor(nombre, DNI) {
        this.nombre = nombre;
        this.DNI = DNI;
    }
}

let reserva = new Reservas();

router.get('/', function (req, res) {
    let db = dbConnection('coches');
    db.collection('estado').find().toArray(function (err, datos) {
        res.send(datos);

    });
});
router.get('/anyadirReserva', function (err, datos) {
    db.collection('reservas').find().toArray();
    for (let i = 0; i < estado.length; i++) {
        texto +=
        `<div>
            <p>${datos[i].estado}</p>
        </div>`
    }
    res.send('reserva añadida' + estado);
});
router.put('/modificarReserva', function (req, res) {
    let db = dbConnection();
    db.collection('reservas').find().toArray();
    res.send('reserva modificada');
});
router.delete('/borrarReserva', function (req, res) {
    let db = dbConnection();
    db.collection('reservas').find().toArray();
    res.send('reserva borrada');
});



module.exports = router;