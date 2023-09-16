const { response, request } = require("express");
//!BCRYPTJS 1.importo bcryptjs
const bcrypt = require("bcryptjs");
//!importo Usuario
const Usuario = require("../models/usuario");

const usuariosGet = (req = request, res = response) => {
  const { apiKey, limit } = req.query;

  res.json({
    mensaje: "recibo un usuario del controlador",
    apiKey,
    limit,
  });
};

//!nueva configuracion, agregar "async"
const usuariosPost = async (req = request, res = response) => {
  //recibir cuerpo de la peticion
  const datos = req.body;
  const { nombre, correo, password, rol } = datos;

  const usuario = new Usuario({ nombre, correo, password, rol });

  // //Verificar si exite el correo - metodo findOne
  // const existeEmail = await Usuario.findOne({ correo });
  // if (existeEmail) {
  //   return res.status(400).json({
  //     msg: "El correo ya existe",
  //   });
  // }

  //!BCRYPTJS 2 - Encriptar contraseña
  const salt = bcrypt.genSaltSync(10);
  usuario.password = bcrypt.hashSync(password, salt);

  //Guardar en BD
  await usuario.save();

  res.json({
    usuario,
    mensaje: "Usuario creado correctamente",
  });
};
//!-----------------------------------------------------

const usuariosPut = (req = request, res = response) => {
  res.json({
    mensaje: "modifico un usuario",
  });
};

const usuariosDelete = (req = request, res = response) => {
  res.json({
    mensaje: "borre un usuario",
  });
};

//!exportar
module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
