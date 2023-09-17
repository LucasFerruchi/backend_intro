const { Router } = require("express");
const { check } = require("express-validator");

//funcion para validar campos
const { validarCampos } = require("../middlewares/validar_campos");

const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuariosCtrl");

//importo funcion para validar
const {
  esRolValido,
  esEmailValido,
  esIdValido,
} = require("../helpers/db-validators");

const router = Router();

router.get("/", usuariosGet);

//!Validaciones en POST
router.post(
  "/",

  [
    check("nombre", "El nombre es obligatorio").notEmpty(), //con notEmpty, decimos q el campo NO TIENE QUE ESTAR VACIO
    check(
      "password",
      "La contraseña debe tener como mínimo 6 caracteres"
    ).isLength({ min: 6 }),

    //En apps pequeñas
    check("correo", "no es un correo válido!").isEmail(),
    //En apps grandes q pueden crecer
    check("correo").custom(esEmailValido),

    // //En apps pequeñas
    // check("rol", "El rol no es válido!").isIn(["USER_ROLE", "ADMIN_ROLE"]),
    //En apps grandes q pueden crecer
    check("rol").custom(esRolValido),
    //!en "models/usuario.js", comentar el "enum:" del "rol"

    validarCampos,
  ],
  usuariosPost
);

//!Validaciones en PUT
router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(), //metodo para verificar que sea lenguaje mongo
    //en "helpers/db-validators.js" funcion para verifiar el id
    check("id").custom(esIdValido),
    //Podemos agregar las validacion q queramos, ej la de rol
    check("rol").custom(esRolValido),
    //Validamos que no haya errores en los campos
    validarCampos, //viene de "middlewares/validar_campos.js"
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
