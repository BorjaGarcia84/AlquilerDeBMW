const express = require('express');
const router = express.Router();
const dbConnection = require('./dbConnection');
const MongoClient = require('mongodb').MongoClient;

class Client {
    constructor(nombre,DNI){
        this.nombre = nombre;
        this.DNI = DNI;
    }
}

router.get('/',function(req,res){
    let db = dbConnection('clientes');
    let texto='';
    db.collection('clientes').find().toArray(function(err,datos){
        for (let i = 0; i < datos.length; i++){
            texto +=
            `<div>
            <p>${datos[i].nombre}</p>
            </div>
           <div>
           <p><img src=${datos[i].DNI} alt=""/></p>
           </div>` 
            res.send(texto);
        }
    });
    });

    //Añadir Cliente
    //
router.post('/anyadirCliente', function (req, res) {
    db.collection('/clientes').find().toArray();
    res.send('reserva cliente');
})
router.delete('/borrarCliente', function (req, res) {
    let db = dbConnection('clientes');
    db.collection('clientes').find().toArray();
    res.send('cliente borrado');
});




















module.exports = router;