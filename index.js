var mqtt = require("mqtt");
require("dotenv").config();
var client = mqtt.connect(process.env.PROTOCOL_BROKER + process.env.BROKER_HOST);

client.on("connect", function() {
  button = {
    action: "x",
    movement: "left",
    dev_id: "ttn_simulator"
  };

  newhardware = {
    id: "007592d3330a13ee",
    add_1: "0100548e2b3038f5",
    add_2: "01ff7ab8c2155e57",
    add_3: "011d5ba90ce241e6",
    dev_id: "ttn_simulator"
  };

  client.publish("hardware", JSON.stringify(newhardware));
  console.log("Publisher: Hardware message Sent");
  setInterval(function() {
    client.publish("ttn", JSON.stringify(button));
    console.log("Publisher: Data message Sent");
  }, 1000);
});
