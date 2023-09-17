const { request, response } = require("express");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario");

const validarJWT = async (req = request, res = response, next) => {
  //obtener token
  const token = req.header("x-token");

  //verificar si hay token
  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la peticion!",
    });
  }

  //
  try {
    //verificar el token y obtener el id del objeto
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    //obtener datos del usuario (importar modelo de Usuario)
    const usuario = await Usuario.findById(uid);

    //validar si el usuario existe
    if (!usuario) {
      return res.status(401).json({
        msg: "Token no válido, usuario no existe!",
      });
    }

    //Validar si el usuario esta ACTIVO
    if (!usuario.estado) {
      return res.status(401).json({
        msg: "Token no válido, usuario inactivo!",
      });
    }

    //guardar los datos del usuario e la req
    req.usuario = usuario;

    next();

    //catch
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no es válido!",
    });
  }
};

module.exports = {
  validarJWT,
};

//!terminada la estructura..exportarla a "routes/usuarios.js"
