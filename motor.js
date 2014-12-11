var five = require("johnny-five");
var Spark = require("spark-io");
var board = new five.Board({
  io: new Spark({
    token: process.env.SPARK_TOKEN,
    deviceId: process.env.SPARK_DEVICE_ID
  })
});

board.on("ready", function() {
  // motorL = new five.Motor({
  //   pin: 'A4'
  // });
  //
  // motorR = new five.Motor({
  //   pin: 'A5'
  // });
  //
  // board.repl.inject({
  //   l: motorL,
  //   r: motorR,
  //   forward: function() {
  //     motorL.fwd(100)
  //     motorR.fwd(100)
  //   },
  //   stop: function() {
  //     motorL.stop()
  //     motorR.stop()
  //   }
  // });

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
