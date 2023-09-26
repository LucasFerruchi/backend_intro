const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar_campos");
const { login } = require("../controllers/authCtrl");

const router = Router();

/*sera una peticion post,
como primer parametro completo la ruta
y como segundo param el "controlador" */
router.post(
  "/login",
  [
    check("correo", "el correo no es valido").isEmail(),
    check("password", "La contraseña es obligatoria!").notEmpty(),
    /*parapoder ver los resultados de estos checks, y enviar
    el error 400, traemos el validarCampos */
    validarCampos,
  ],
  login
);

module.exports = router;
