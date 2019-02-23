var mqtt = require("mqtt")
var client = mqtt.connect('mqtt://labict.be');

client.on('connect', function () {
    button = {
        button:1,
        dev_id: "ttn_simulator"
    }

    newhardware = {
        id: 1,
        add_1:10 ,
        add_2: 20,
        add_3: 30,
        dev_id: "ttn_simulator"
    }

    client.publish('TTN', JSON.stringify(newhardware));
    console.log('Publisher: Initial message Sent');

    setInterval(function() {
        
        client.publish('TTN', JSON.stringify(button));
        console.log('Publisher: Message Sent');

    }, 1000);
});