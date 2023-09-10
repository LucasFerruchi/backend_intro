const { Router } = require("express");
//!a-CONTROLADORES-3.IMPORTAR LA FUNCION
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuariosCtrl");

const router = Router();

//!a-CONTROLADORES-3.
// //PETICION GET: pedimos info al backend
// router.get("/", function (req, res) {
//   res.json({
//     mensaje: "recibo un usuario",
//   });
// });

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

//PETICION DELETE: elimino info al backend
router.delete("/:id", usuariosDelete);
//---------------------------------------------------------------------------------------------

module.exports = router;
