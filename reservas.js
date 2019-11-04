const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: false }))            //para accesoder al body y que no sea indefinido
const dbConnection = require('./dbConnection');
const MongoClient = require('mongodb').MongoClient;

class Reservas {
    constructor(nombre, DNI, coche, dias) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.coche = coche;
        this.dias = dias
    }
}

let reserva = new Reservas();


//LISTA DE RESERVAS
router.get('/', function (req, res) {
    let db = dbConnection('reservas');
    let texto1 = '';
    db.collection('reservas').find().toArray(function (err, datos) {
        for (let i = 0; i < datos.length; i++) {
            texto1 +=
                `<div>
            <p>${datos[i].nombre}</p>
            </div>
           <div>
           <p><img src=${datos[i].DNI} alt=""/></p>
           </div>
           <div>
           <p>${datos[i].coche}</p>
           <p>${datos[i].dias}</p>
           </div>`
        }
    })
    res.send(texto1);

});

//AÑADIR RESERVA
//descripcion:añadir reserva eligiendo el vehiculo
//entrada: nombre,dni y dias
//salida :JSON nombre,dni ,dias y vehiculo.
//Añadir reserva
router.post('/anyadirReserva', function (req, res) {
    let db = dbConnection('reservas');
    db.collection('reservas').find().toArray(function (err, datos) {
        res.send('reserva añadida');
    });
});

//MODIFICAR RESERVA   
router.put('/modificarReserva', function (req, res) {
    let db = dbConnection('reservas');
    db.collection('reservas').find().toArray(function (err,datos){

        res.send('reserva modificada');
    })
});

//BORRAR RESERVA
router.delete('/borrarReserva', function (req, res) {
    let db = dbConnection('reservas');
    db.collection('reservas').find().toArray();
    res.send('reserva borrada');
});



module.exports = router;