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
    

})




















module.exports = router;