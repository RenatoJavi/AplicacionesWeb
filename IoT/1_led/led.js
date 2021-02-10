var five = require("johnny-five");
//var board = new five.Board();

var opts = { port: "COM10" };
var board = new five.Board(opts);


five.Sensor();
five.Thermometer();

board.on("ready", function() {
    var led = new five.Led(13);
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


    // This will grant access to the led instance
    // from within the REPL that's created when
    // running this program.



});