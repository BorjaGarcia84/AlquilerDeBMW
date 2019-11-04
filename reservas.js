const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: false }))          
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

let reserva = new Reservas()
//LISTA DE RESERVAS         OK
router.get('/', function (req, res) {
    console.log(req)
    let db = dbConnection('reservas');
    let texto1 = '';
    db.collection('reservas').find({nombre:req.query.reservas},{DNI:req.query.reservas},{coche:req.query.coche},{dias:req.query.dias}).toArray(function (err, datos) {
        if(err!==null){
            console.log(err);
            return;
        }
        //for (let i = 0; i < datos.length; i++) {
        //    texto1 +=
        //        `<div>
        //    <p>${datos[i].nombre}</p>
        //    </div>
        //   <div>
        //   <p>${datos[i].coche}</p>
        //   <p>${datos[i].dias}</p>
        //   </div>`
        //}
    })
    res.send(texto1);

});

//AÑADIR RESERVA            OK
router.post('/anyadirReserva', function (req, res) {
    let db = dbConnection('reservas');
    db.collection('reservas').find().toArray(function (err, datos) {
        res.send('reserva añadida');
    });
});

//MODIFICAR RESERVA             OK   
router.put('/modificarReserva', function (req, res) {
    let db = dbConnection('reservas');
    db.collection('reservas').find().toArray(function (err,datos){

        res.send('reserva modificada');
    })
});

//BORRAR RESERVA            OK
router.delete('/borrarReserva', function (req, res) {
    let db = dbConnection('reservas');
    db.collection('reservas').find().toArray();
    res.send('reserva borrada');
});



module.exports = router;