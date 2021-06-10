const redis = require("redis");

// Create Redis client
let client = redis.createClient();

module.exports = client;

client.on("error", function () {
  console.log("error connecting to redis");
});

client.on("connect", function () {
  console.log("connected to redis");
});
