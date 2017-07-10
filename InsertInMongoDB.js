/**
 * Created by ameurdrira on 28/01/2017.
 */

var NRP = require('node-redis-pubsub');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';

var config = {
    port: 6379,
    host: 'soitech.cloudapp.net',
    auth: 'iot2016'
};
var nrp = new NRP(config);

nrp.on('Uplink', function (data) {

    MongoClient.connect(url, function (err, db) {

        if (err) {
            return console.dir(err);
        }
        db.collection('Frame').insertOne(data);
    });


});
