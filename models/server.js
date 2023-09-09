// //!2.en server.js crear su constructor

// const express = require("express");

// class Server {
//   constructor() {
//     this.app = express();

//     //Funcion para las rutas
//     this.routes(); /*llamo a la func 'routes', para q
//     al llamarlo al servidor en index.js lo ejecute*/
//   }
//   routes() {
//     this.app.get("/", function (req, res) {
//       res.send("Hola 52i");
//     });
//   }
//   listen() {
// //!OJO ACA - completar bien
//     this.app.listen(3000, () => {
//       console.log("Server Online");
//     });
//   }
// }

// module.exports = Server;

// /*
// COMO QUEDARA NUESTRO INDEX.JS ENTONCES?

// VOLVER A index.js y configurarlo
// */
//!----------------------------------------------------------

// //!4.MIDDLEWARES:
// /*con middlewares "actuamos" en el "medio" del
// pedido del usuario y nuestra rspuesta.
// por ejemplo podemos hacer 'mas validaciones' de usuarios,
// o para CORS, o para leer lo que envian los usuarios
// en la peticion, tbn para definir la 'carpeta publica'
// (donde iran archivos estaticos de nuestro proyecto)*/

// const express = require("express");

// class Server {
//   constructor() {
//     this.app = express();

//     //!4.a-agregarlo al constructor - middlewares
//     this.middlewares();

//     //Funcion para rutas
//     this.routes();
//   }

//   //!4.a-'MIDDLEWARES'
//   middlewares() {
//     //CORS

//     //LEER ENVIOS

//     //CARPETA PUBLICA
//     //!4.b-definir carpeta publica y archivo de ej 'index.html'
//     this.app.use(express.static("public"));
//   }
//   //------------------------------------------------------

//   routes() {
//     // //!4.c-modificar la ruta por  '/api/usuarios'

//     // this.app.get("/api/usuarios", function (req, res) {
//     //   res.send("Hola 52i");
//     // });
//     // //-----------------------------------------------------

//     //!4.c-otro ejemplo de ruta..
//     this.app.get("/api/usuarios", function (req, res) {
//       //cambio el .send por .json..
//       res.json({
//         mensaje: "soy un usuario",
//       });
//       //!mostrar en FIREFOX: localhost:3000/api/usuarios
//     });
//     //-------------------------------------------------------
//   }
//   listen() {
//     this.app.listen(3000, () => {
//       console.log("Server Online");
//     });
//   }
// }

// module.exports = Server;
// //!----------------------------------------------------------

//!5.PETICION GET POST PUT DELETE
//!5.d-configuro el server.js
const express = require("express");
//!7.2-en "server.js" IMPORTAR "cors"
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();

    //!5.d-1.PETICION GET POST PUT DELETE
    this.usuariosPath = "/api/usuarios";

    this.middlewares();

    this.routes();
  }

  middlewares() {
    //CORS
    //!7.3-en "server.js/middlewares" agragar "cors"
    this.app.use(cors());

    //LEER LO QUE ENVIA EL USUARIO EN EL CUERPO DE LA PATICION
    //!7.A-
    this.app.use(express.json());
    /*con esto habilitamos a nuestro servidor para recibir
    data y parsearla*/

    //CARPETA PUBLICA
    this.app.use(express.static("public"));
  }

  routes() {
    //modifico la ruta, para q tome 'public'
    // this.app.get("/api/usuarios", function (req, res) {
    //   res.send("Hola 52i");
    // });
    //-----------------------------------------------------
    // //otro ejemplo de ruta..mostrar en FIREFOX
    // this.app.get("/api/usuarios", function (req, res) {
    //   //cambio el .send por .json
    //   res.json({
    //     mensaje: "soy un usuario",
    //   });
    // });
    // //-------------------------------------------------------

    //!5.d-2.indico la nueva ruta de "usuarios.js"
    this.app.use(this.usuariosPath, require("../routes/usuarios"));

    //!la ruta "/api/usuarios" la definimos ahora en el constructor
    //-------------------------------------------------------
  }
  listen() {
    this.app.listen(3000, () => {
      console.log("Server Online");
    });
  }
}

module.exports = Server;
//!----------------------------------------------------------
