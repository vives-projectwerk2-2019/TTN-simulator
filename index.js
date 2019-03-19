var mqtt = require("mqtt")
require('dotenv').config()
var client = mqtt.connect('mqtt://' + process.env.BROKER_HOST);

client.on('connect', function () {
    button = {
        action:"X",
        movement:"left",
        dev_id: "ttn_simulator"
    }

    newhardware = {
        id: 1,
        add_1: 10,
        add_2: 20,
        add_3: 30,
        dev_id: "ttn_simulator"
    }

    setInterval(function() {
        client.publish('hardware', JSON.stringify(newhardware));
        console.log('Publisher: Hardware message Sent');   
        client.publish('TTN', JSON.stringify(button));
        console.log('Publisher: Data message Sent');

    }, 1000);
});