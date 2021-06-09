const Sequelize = require("sequelize");
const db = require("../db");

const Recommendation = db.define("recommendation", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM(["Drink", "Food", "Movie", "Activity", "Other"]),
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  level: {
    type: Sequelize.ENUM([
      "you MUST try this",
      "worth trying",
      "if it's not too much trouble",
    ]),
  },
});

module.exports = Recommendation;
