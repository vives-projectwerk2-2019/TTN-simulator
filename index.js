var mqtt = require("mqtt")
var client = mqtt.connect('mqtt://labict.be');

client.on('connect', function () {
    button = {
        action:4,
        movement:5,
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