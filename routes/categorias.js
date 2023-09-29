const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar_jwt");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar_campos");
const {
  obtenerCategorias,
  obtenerCategoria,
  crearCategoria,
  actualizarCategoria,
  borrarCategoria,
} = require("../controllers/categoriasCtrl");

const { esAdminRole } = require("../middlewares/validar-roles");

const router = Router();

router.get("/", [validarJWT], obtenerCategorias);

router.get(
  "/:id",
  [validarJWT, check("id", "El id no es valido").isMongoId(), validarCampos],
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
    validarCampos,
  ],
  borrarCategoria
);

module.exports = router;
