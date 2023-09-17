const { Router } = require("express");
const { login } = require("../controllers/auth");

const router = Router();

/*sera una peticion post,
como primer parametro completo la ruta
y como segunda param el "controlador" */
router.post("/login", login);

module.exports = router;
