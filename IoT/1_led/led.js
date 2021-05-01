var five = require("johnny-five");
//var board = new five.Board();

var opts = { port: "COM11" };
var board = new five.Board(opts);


five.Sensor();
five.Thermometer();

board.on("ready", function() {
    var led = new five.Led(2);
    var blikCount = 0;
    var blinMax = 20;
    led.blink(500, function() {

        blikCount++;
        console.log(`Tengo cambio de estado ${blikCount} tiempo`);

        if (blikCount >= blinMax) {
            console.log('Detener parpadeo ahora');
            led.stop();
        }
    });

});