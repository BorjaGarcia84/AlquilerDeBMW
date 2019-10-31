const express = require('express');
const router = express.Router();
const dbConnection = require('./dbConnection');

class Client {
    constructor(nombre,DNI){
        this.nombre = nombre;
        this.DNI = DNI;
    }
}

router.get('/',function(req,res){
    let db = dbConnection('coches');
    let texto='';
    db.collection('clientes').find().toArray(function(err,datos){
        for (let i = 0; i < datos.length; i++){
            texto +=
            `<div>
            <p>${datos[i].nombre}</p>
            </div>
           <div>
           <p><img src=${datos[i].imagen} alt=""/></p>
           </div>
           <div>
           <p>${datos[i].precioPorDia}</p>
           <p>${datos[i].estado}</p>
           </div>` 
            res.send(texto);
        }
    });
    });
router.get('/anyadirCliente', function (req, res) {
    
    db.collection('clientes').find().toArray();
    res.send('reserva cliente');
})


















module.exports = router;