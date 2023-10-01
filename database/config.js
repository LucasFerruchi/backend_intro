const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log("Base de datos OnLine");
  } catch (error) {
    console.log(error);
    throw new Error("Error en el inicio de Base de Datos"); //mostrara el mensaje en consola
  }
};

module.exports = {
  dbConnection,
};

//!LLEVARLA A "server.js"
