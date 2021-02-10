var SerialPort = require('@serialport/stream');
const readline = require('readline');
SerialPort.parser.readLine;

var port = new SerialPort('COM10', { baudRate: 9600 });

var parser = port.pipe(new readLine({ delimeter: '\r\n' }));

parser.on('open', function() {

    console.log('coneccion abierta');

});
parser.on('data', function(data) {
    var temp = parseInt(data, 10) + "C";

    console.log(temp);
});
parser.on('error', function(ERR) {

    console.error(ERR);
});