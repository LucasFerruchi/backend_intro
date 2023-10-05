const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();

    //http
    this.port = process.env.PORT;
    //rutas
    this.authPath = "/api/auth";
    this.usuariosPath = "/api/usuarios";
    this.categoriasPath = "/api/categorias";
    //ruta cursos
    this.cursosPath = "/api/cursos";

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
    this.app.use(this.categoriasPath, require("../routes/categorias"));
    //ruta a cursos
    this.app.use(this.cursosPath, require("../routes/cursos"));
  }

  //LISTEN
  listen() {
    this.app.listen(this.port, () => {
      console.log("Server Online port:", this.port);
    });
  }
}

module.exports = Server;
