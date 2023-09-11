const express = require("express");
const cors = require("cors");
//!9-En "server.js" (modelo), llamar funcion "dbConnection"
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();

    //!VARIABLE DE ENTORNO
    //!4.En "server.js". Agregarla en el constructor
    this.port = process.env.PORT;
    //!5.Configurar el "listen"

    //!5.d-1.PETICION GET POST PUT DELETE
    this.usuariosPath = "/api/usuarios";

    //!9-En "server.js" (modelo), llamar funcion "dbConnection"
    this.conectarDB();

    this.middlewares();

    this.routes();
  }
  //!9-En "server.js" (modelo), llamar funcion "dbConnection"
  async conectarDB() {
    await dbConnection();
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
