//validaciones
const { validationResult } = require("express-validator");

//ESTA FUNC HACE QUE EL PROYECTO NO SE CAIGA AL DAR ALGUN ERROR
const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

module.exports = {
  validarCampos,
};
