<<<<<<< HEAD
/*Este ejemplo es con USUARIOS, pero podria ser con
PRODUCTOS, PELICULAS, ETC*/
//!1.importamos Router y guardamos en una variable
=======
>>>>>>> segundaClase
const { Router } = require("express");
//!a-CONTROLADORES-3.IMPORTAR LA FUNCION
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuariosCtrl");

const router = Router();

<<<<<<< HEAD
//!2.creo la estructura de las rutas y configurar server.js
/*hacer TODOS los tipos de PETICIONES y OJO 
poner bien las rutas */
=======
//!a-CONTROLADORES-3.
// //PETICION GET: pedimos info al backend
// router.get("/", function (req, res) {
//   res.json({
//     mensaje: "recibo un usuario",
//   });
// });
>>>>>>> segundaClase

//!a-CONTROLADORES-3.
//PETICION GET: pedimos info al backend
router.get("/", usuariosGet);
//---------------------------------------------------------------------------------------------

//!a-5.En "usuariosCtrl.js", crear el resto de las funciones
// //PETICION POST: mandamos info al backend
// router.post("/", function (req, res) {
//   //COMO RECIBIR DATOS
//   const body = req.body;

//   //PETICION POST: mandamos info al backend
//   res.json({
//     mensaje: "envio un usuario",

//     //RECIBIR EL CUERPO DE LA PETICION
//     body,
//   });
// });

//PETICION POST: mandamos info al backend
router.post("/", usuariosPost);
//---------------------------------------------------------------------------------------------

<<<<<<< HEAD
  //PETICION POST: mandamos info al backend
  res.json({
    mensaje: "envio un usuario",

    //!7.C-ENV EL CUERPO DE LA PETICION
    body,
  });
});

//PETICION PUT: actualizo info al backend
router.put("/:id", function (req, res) {
  res.json({
    mensaje: "modifico un usuario",
  });
});
=======
// //PETICION PUT: actulaizo info al backend
// router.put("/:id", function (req, res) {
//   res.json({
//     mensaje: "modifico un usuario",
//   });
// });

//PETICION PUT: actulaizo info al backend
router.put("/:id", usuariosPut);
//---------------------------------------------------------------------------------------------

// //PETICION DELETE: elimino info al backend
// router.delete("/:id", function (req, res) {
//   res.json({
//     mensaje: "borre un usuario",
//   });
// });
>>>>>>> segundaClase

//PETICION DELETE: elimino info al backend
router.delete("/:id", usuariosDelete);
//---------------------------------------------------------------------------------------------

module.exports = router;
