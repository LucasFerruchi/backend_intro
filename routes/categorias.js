const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar_jwt");
const { esAdminRole } = require("../middlewares/validar-roles");
const { check } = require("express-validator");
const { esCategValido } = require("../helpers/db-validators");
const { validarCampos } = require("../middlewares/validar_campos");
const {
  obtenerCategorias,
  obtenerCategoria,
  crearCategoria,
  actualizarCategoria,
  borrarCategoria,
} = require("../controllers/categoriasCtrl");

const router = Router();

router.get("/", [validarJWT], obtenerCategorias);

router.get(
  "/:id",
  [
    validarJWT,
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(esCategValido),
    validarCampos,
  ],
  obtenerCategoria
);

router.post(
  "/",
  [
    validarJWT,
    esAdminRole,
    check("nombre", "El nombre es obligatorio").notEmpty(),
    validarCampos,
  ],
  crearCategoria
);
//probar en POSTMAN sin TOKEN primero

router.put(
  "/:id",
  [
    validarJWT,
    esAdminRole,
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(esCategValido),
    check("nombre", "El nombre es obligatorio").notEmpty(),
    validarCampos,
  ],
  actualizarCategoria
);
//probar en POSTMAN

router.delete(
  "/:id",
  [
    validarJWT,
    esAdminRole,
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(esCategValido),
    validarCampos,
  ],
  borrarCategoria
);

module.exports = router;
