const { Router } = require("express");

const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar_campos");

const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuariosCtrl");

const {
  esRolValido,
  esEmailValido,
  esIdValido,
} = require("../helpers/db-validators");

const router = Router();

router.get("/", usuariosGet);

router.post(
  "/",

  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check(
      "password",
      "La contraseña debe tener como mínimo 6 caracteres"
    ).isLength({ min: 6 }),

    check("correo", "no es un correo válido!").isEmail(),
    check("correo").custom(esEmailValido),

    check("rol").custom(esRolValido),

    validarCampos,
  ],
  usuariosPost
);

router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(esIdValido),
    check("rol").custom(esRolValido),
    validarCampos,
  ],
  usuariosPut
);

//!Validaciones en DELETE
router.delete(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(esIdValido),
    validarCampos,
  ],
  usuariosDelete
);

module.exports = router;
