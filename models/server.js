const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();

    //http
    this.port = process.env.PORT;
    //ruta de autenticacion, agregar a "routes"
    this.authPath = "/api/auth";
    this.usuariosPath = "/api/usuarios";
    this.categoriasPath = "/api/categorias";

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
    //Ruta de autenticacion
    this.app.use(this.authPath, require("../routes/auth"));

    this.app.use(this.usuariosPath, require("../routes/usuarios"));
    //ruta a categorias
    this.app.use(this.categoriasPath, require("../routes/categorias"));
  }

  //LISTEN
  listen() {
    this.app.listen(this.port, () => {
      console.log("Server Online port:", this.port);
    });
  }
}

module.exports = Server;
