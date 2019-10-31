const MongoClient = require('mongodb').MongoClient;

let db;
MongoClient.connect('mongodb://localhost:27017',
    function (err, client) {
        if (err !== null) {
            console.log(err.message);
            return;
        }
        db = client.db('BMW');
        console.log(db);
    }
);

function getDBConnection(){
    
    return db;
}

module.exports = getDBConnection;