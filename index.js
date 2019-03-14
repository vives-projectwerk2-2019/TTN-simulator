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

    client.publish('TTN', JSON.stringify(newhardware));
    console.log('Publisher: Initial message Sent: ' + JSON.stringify(newhardware));

    setInterval(function() {
        
        client.publish('TTN', JSON.stringify(button));
        console.log('Publisher: Message Sent: ' + JSON.stringify(button));

    }, 1000);
});