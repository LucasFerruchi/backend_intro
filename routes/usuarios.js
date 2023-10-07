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

const { validarJWT } = require("../middlewares/validar_jwt");
const { esAdminRole } = require("../middlewares/validar-roles");

const router = Router();

//!Ruta GET (Pedir datos podria un admin)
router.get("/", usuariosGet);

//!Ruta POST - REGISTRO DE USUARIO (...)
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

//!Ruta PUT (Actualizar podria un usuario comun)
router.put(
  "/:id",
  [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(esIdValido),
    check("rol").custom(esRolValido),
    validarCampos,
  ],
  usuariosPut
);

//!Ruta DELETE (Borrar podria un admin)
router.delete(
  "/:id",
  [
    validarJWT,

    esAdminRole,

    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(esIdValido),

    validarCampos,
  ],
  usuariosDelete
);

module.exports = router;
