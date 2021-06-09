//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/user");
const Recommendation = require("./models/recommendation");

User.hasMany(Recommendation);
Recommendation.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Recommendation,
  },
};
