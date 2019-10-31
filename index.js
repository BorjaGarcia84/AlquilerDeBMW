const express = require('express');
const app = express();
const coche = require('./coche');
const reservas = require('./reservas');
const clientes = require('./clientes')

app.use(express.static('public'))

const MongoClient = require('mongodb').MongoClient;

let db;
MongoClient.connect('mongodb://localhost:27017',
    function (err, client) {
        if (err !== null) {
            console.log(err.message);
            return;
        }
        db = client.db('BMW');
    }
)

app.use('/coche', coche);
app.use('/reservas', reservas);
app.use('/clientes',clientes)


app.listen(3000, function () {
    console.log('esta en marcha la app de express');
});