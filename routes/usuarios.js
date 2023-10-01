const { Router } = require("express");

//!importar validaciones
const { check } = require("express-validator");

//funcion para validar campos
const { validarCampos } = require("../middlewares/validar_campos");

const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuariosCtrl");

const router = Router();

router.get("/", usuariosGet);

router.post(
  "/",
  //validaciones
  [
    check("nombre", "El nombre es obligatorio").notEmpty(), //con notEmpty, decimos q el campo NO TIENE QUE ESTAR VACIO
    check(
      "password",
      "La contraseña debe tener como mínimo 6 caracteres"
    ).isLength({ min: 6 }),
    check("correo", "no es un correo válido!").isEmail(),
    check("rol", "El rol no es válido!").isIn(["USER_ROLE", "ADMIN_ROLE"]),
    /*
      Pero si da algun error, el proyecto CAE.
      Como hago para que esto no pase?
      *funcion para validarCampos viene desde CARPETA MIDDLEWARES
      */
    validarCampos,
  ],
  usuariosPost
);

router.put("/:id", usuariosPut);

router.delete("/:id", usuariosDelete);

module.exports = router;
