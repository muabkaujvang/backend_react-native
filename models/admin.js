const { DataTypes } = require("sequelize");
const sequelizePromise = require("../config/db");

const defineAdminModel = async () => {
  const sequelize = await sequelizePromise;

  const Admin = sequelize.define("Admin", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  await sequelize.sync({ force: false, alter: true });
  console.log("Admin model synchronized.");

  return Admin;
};

const adminModelPromise = defineAdminModel();

module.exports = adminModelPromise;
