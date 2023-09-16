const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();

    //http
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //DB
    this.conectarDB();

    //MIDDLEWARES
    this.middlewares();

    //RUTAS
    this.routes();
  }

  //DB - FUNCTION
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
