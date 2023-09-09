/*Este ejemplo es con USUARIOS, pero podria ser con
PRODUCTOS, PELICULAS, ETC*/
//!1.importamos Router y guardamos en una variable
const { Router } = require("express");

const router = Router();

//!2.creo la estructura de las rutas y configurar server.js
/*hacer TODOS los tipos de PETICIONES y OJO 
poner bien las rutas */

//PETICION GET: pedimos info al backend
router.get("/", function (req, res) {
  res.json({
    mensaje: "recibo un usuario",
  });
});

//PETICION POST: mandamos info al backend
router.post("/", function (req, res) {
  //7.COMO RECIBIR DATOS
  //!7.C-RECIBIR EL CUERPO DE LA PETICION
  const body = req.body;

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

//PETICION DELETE: elimino info al backend
router.delete("/:id", function (req, res) {
  res.json({
    mensaje: "borre un usuario",
  });
});

module.exports = router;
