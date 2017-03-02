var mosca = require('mosca');
// var redis = require("redis"),
// redisClient = redis.createClient();

var moscasettings = {
  port: 1883,
  stats: true
};

var mqttserver = new mosca.Server(moscasettings);

// redisClient.on("error", function (err) {
//   console.log("Error " + err);
// });

mqttserver.on('ready', function setup() {
  console.log('Mosca server is up and running');
});

mqttserver.on('clientConnected', function(client) {
    var sn=client.id.split('/')[0];
    var info=client.id.split('/')[1];
    console.log('client connected', sn);
    console.log('info', info);

  //   try{
  //     redisClient.hmset("mqtt_cli",sn,info);
  //   }catch(err){
  //     console.log(err+"\r\n");
  //   }

  // var message = {
  //   topic: 'aaaaaa',
  //   payload: 'abcde', // or a Buffer
  //   qos: 0, // 0, 1, or 2
  //   retain: false // or true
  // };

  // mqttserver.publish(message, function() {
  //   console.log('done!');
  // });
});

// fired when a message is received
mqttserver.on('published', function(packet, client) {
  console.log('Published', packet.payload.toString());
});

mqttserver.on('subscribed', function (topic, client) {
    console.log("Subscribed :="+client.id+topic);
});

mqttserver.on('unsubscribed', function (topic, client) {
    console.log('unsubscribed := ', topic);
});

mqttserver.on("error", function (err) {
    console.log(err);
});

mqttserver.on('clientDisconnecting', function (client) {
    console.log('clientDisconnecting := ', client.id);
});

mqttserver.on('clientDisconnected', function (client) {
    // var sn=client.id.split('/')[0];
    // try{
    //  redisClient.hdel("mqtt_cli",sn);
    // }catch(err){
    //   console.log(err+"\r\n");
    // }
});
