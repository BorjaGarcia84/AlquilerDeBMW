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
router.post('/anyadirReserva', function (req, res) {
    
    db.collection('reservas').find().toArray();
    res.send('reserva añadida');
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