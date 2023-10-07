const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();

    //http
    this.port = process.env.PORT;

    //RUTAS
    //login
    this.authPath = "/api/auth";
    //usuarios
    this.usuariosPath = "/api/usuarios";
    //categorias
    this.categoriasPath = "/api/categorias";
    //cursos
    this.cursosPath = "/api/cursos";
    //buscar
    this.buscarPath = "/api/buscar";

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
    //Ruta de usuarios
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
    //Ruta de categorias
    this.app.use(this.categoriasPath, require("../routes/categorias"));
    //Ruta de cursos
    this.app.use(this.cursosPath, require("../routes/cursos"));
    //Ruta de buscar
    this.app.use(this.buscarPath, require("../routes/buscar"));
  }

  //LISTEN
  listen() {
    this.app.listen(this.port, () => {
      console.log("Server Online port:", this.port);
    });
  }
}

module.exports = Server;
