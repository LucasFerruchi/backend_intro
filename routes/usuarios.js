const { Router } = require("express");

const router = Router();

//PETICION GET: pedimos info al backend
router.get("/", function (req, res) {
  res.json({
    mensaje: "recibo un usuario",
  });
});

//PETICION POST: mandamos info al backend
router.post("/", function (req, res) {
  //7.COMO RECIBIR DATOS
  const body = req.body;

  //PETICION POST: mandamos info al backend
  res.json({
    mensaje: "envio un usuario",

    //!7.C-RECIBIR EL CUERPO DE LA PETICION
    body,
  });
});

//PETICION PUT: actulaizo info al backend
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
