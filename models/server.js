const express = require("express");
const cors = require("cors");
<<<<<<< HEAD
//!9.1-En "server.js" (modelo), llamar funcion "dbConnection"
=======
>>>>>>> modeloUsuario
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();

    //http
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

<<<<<<< HEAD
    //!9.3-En "server.js" (modelo), llamar funcion "dbConnection"
=======
    //DB
>>>>>>> modeloUsuario
    this.conectarDB();

    //MIDDLEWARES
    this.middlewares();

    //RUTAS
    this.routes();
  }
<<<<<<< HEAD
  //!9.2-En "server.js" (modelo), llamar funcion "dbConnection"
=======

  //DB - FUNCTION
>>>>>>> modeloUsuario
  async conectarDB() {
    await dbConnection();
  }

  //MIDDLEWARES
  middlewares() {
    //CORS
    this.app.use(cors());

    //RECIBIR ARCHIVOS .JSON (EJ. BODY)
    this.app.use(express.json());

    //ACCESO CARPETA PUBLICA
    this.app.use(express.static("public"));
  }

  //RUTAS
  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  //LISTEN
  listen() {
    this.app.listen(this.port, () => {
      console.log("Server Online port:", this.port);
    });
  }
}

module.exports = Server;
