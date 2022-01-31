const { Admin } = require("../db.js");

const infoAdmins = [
  {
    mail: "admin@arsistemaderiego.com",
    password: "asd12345",
  },
];

const preloadAdmins = async () => {
  try {
    await Admin.bulkCreate(infoAdmins);
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
  preloadAdmins,
};
