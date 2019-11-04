const express = require('express');
const router = express.Router();
const dbConnection = require('./dbConnection');
const MongoClient = require('mongodb').MongoClient;
router.use(express.urlencoded({ extended: false }))      

class Coche {
    constructor(nombre, imagen, precioPorDia, estado) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precioPorDia = precioPorDia;
        this.estado = estado;
    }
}

let coche = new Coche()
//POSTMAN FUNCIONA
router.get('/', function (req, res) {
    console.log(req)
    let db = dbConnection('coches');
    let texto = '';
    db.collection('coches').find().toArray(function (err, datos) {
        if(err!==null){
            console.log(err);
            return;
        }
        for (let i = 0; i < datos.length; i++) {
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
        }
        res.send(texto);
    });
})

//POSTMAN FUNCIONA RESPUESTA
router.post('/anyadirCoche', function (req, res) {
    let db = dbConnection('coches');
    db.collection('coches').find().toArray(function (err, datos) {
        res.send('NO PUEDE AÑADIR COCHE (Solo el administrador)');
    });
});
//POSTMAN FUNCIONA RESPUESTA
router.put('/modificarCoche', function (req, res) {
    let db = dbConnection('coches');
    db.collection('coches').find().toArray(function (err, datos) {
        res.send('NO PUEDES MODIFICAR COCHE (Solo el administrador)');
    });
});

//POSTMAN FUNCIONA RESPUESTA
router.delete('/borrarCoche', function (req, res) {
    let db = dbConnection('coche');
    db.collection('coches').find().toArray(function (err, datos) {
        res.send('NO PUEDES BORRAR COCHE(Solo el administrador)');
    });
});



module.exports = router;