const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar_jwt");
const { esAdminRole } = require("../middlewares/validar-roles");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar_campos");
//Validar curso
const { esCursoValido } = require("../helpers/db-validators");

const {
  obtenerCursos,
  obtenerCurso,
  crearCurso,
  actualizarCurso,
  borrarCurso,
} = require("../controllers/cursosCtrl");

const router = Router();

router.get("/", obtenerCursos);

router.get(
  "/:id",
  [
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(esCursoValido),
    validarCampos,
  ],
  obtenerCurso
);

router.post(
  "/",
  [
    validarJWT,
    esAdminRole,
    check("nombre", "El nombre es obligatorio").notEmpty(),
    validarCampos,
  ],
  crearCurso
);
//probar en POSTMAN sin TOKEN primero

router.put(
  "/:id",
  [
    validarJWT,
    esAdminRole,
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(esCursoValido),
    validarCampos,
  ],
  actualizarCurso
);
//probar en POSTMAN

router.delete(
  "/:id",
  [
    validarJWT,
    esAdminRole,
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(esCursoValido),
    validarCampos,
  ],
  borrarCurso
);

module.exports = router;
