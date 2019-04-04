# TTN-simulator
## TTN information
## basic information
### What is TTN?
The Things Network, commonly known as TTN, is an open source infrastructure aiming at providing a free LoRaWAN network cover. This project is developed by a growing community across the world, and is based on voluntary contributions to the project.
### How does it works?
In order to use the TTN network, you must first create an account. This is totally free of any charge, as it is the philosophy of this community to provide a totally free and open network. This account allows you to create different applications fitted for your needs.

Once your application is functional, you must register a device to use it. This will give you the necessary keys and IDs to connect a node to the network and collect its data. Once a host has joined the network, you can access the data it sends in real time, either directly through the TTN interface, or via other data collection services
### Which parameters does I get?
* your application ID (allows you to identify your nodes on the network
* the registered devices (your sensors, their state and the data they are sending)
* a payload decoder (short instructions used to interpret the incoming messages)
* general settings of your application (e.g. security, network keys, activation type, ...)
### How do I install dependencies?
```
npm install
```
## How do I run?
```
npm start
```
