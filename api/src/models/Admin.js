const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "admin",
    {
        mail: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { timestamps: false }
  );
};
