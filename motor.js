var sys = require("sys");
var console = require("console");
var five = require("johnny-five");
var Spark = require("spark-io");
var board = new five.Board({
  io: new Spark({
    token: process.env.ACCESS_TOKEN,
    deviceId: process.env.DEVICE_ID
  })
});

board.on("ready", function() {
  var led = new five.Led('D7')
  led.blink()
  // motorL = new five.Motor({
  //   pin: 'A4'
  // });
  //
  // motorR = new five.Motor({
  //   pin: 'A5'
  // });
  //
   board.repl.inject({
     led: led
   });

  motorL = new five.Pin({
    pin: 'A0'
  });

  motorR = new five.Pin({
    pin: 'A1'
  });

  var d0 = new five.Pin("D0")

  board.repl.inject({
    Pin: five.Pin,
    Led: five.Led,
    l: motorL,
    r: motorR,
    forward: function() {
      motorL.write(1)
      motorR.write(1)
    },
    stop: function() {
      motorL.write(0)
      motorR.write(0)
    }
  });
});
