const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();

    this.port = process.env.PORT;

    this.authPath = "/api/auth";
    this.usuariosPath = "/api/usuarios";
    this.categoriasPath = "/api/categorias";
    this.cursosPath = "/api/cursos";
    this.buscarPath = "/api/buscar";

    this.conectarDB();

    this.middlewares();

    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());

    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
    this.app.use(this.categoriasPath, require("../routes/categorias"));
    this.app.use(this.cursosPath, require("../routes/cursos"));
    this.app.use(this.buscarPath, require("../routes/buscar"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server Online port:", this.port);
    });
  }
}

module.exports = Server;
