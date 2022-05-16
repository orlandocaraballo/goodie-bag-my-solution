const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("candy", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10,
      min: 0,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://images5.fanpop.com/image/photos/30400000/Candy-candy-30424649-1920-1200.jpg",
  },
});
