const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();

    //!VARIABLE DE ENTORNO
    //!4.En "server.js". Agregarla en el constructor
    this.port = process.env.PORT;
    //!5.Configurar el "listen"

    //!5.d-1.PETICION GET POST PUT DELETE
    this.usuariosPath = "/api/usuarios";

    this.middlewares();

    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //LEER LO QUE ENVIA EL USUARIO EN EL CUERPO DE LA PATICION
    this.app.use(express.json());

    //CARPETA PUBLICA
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }
  // listen() {
  //   this.app.listen(3000, () => {
  //     console.log("Server Online");
  //   });
  // }

  //!5.Configurar el "listen"
  listen() {
    this.app.listen(this.port, () => {
      console.log("Server Online port:", this.port);
    });
  }
}

module.exports = Server;
//!----------------------------------------------------------
