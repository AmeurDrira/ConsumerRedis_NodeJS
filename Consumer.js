/**
 * Created by ameurdrira on 28/01/2017.
 */

var NRP = require('node-redis-pubsub');
var time = require('time');

var config = {
    port: 6379,
    host: 'soitech.cloudapp.net',
    auth: 'iot2016'
};
var nrp = new NRP(config);

nrp.on('Uplink', function (data) {

    b = new time.Date();
    console.log(b.toString() + "Downlink msg : " + JSON.stringify(data));
});
