const { response, request } = require("express");
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
  // //COMO RECIBIR DATOS
  // const body = req.body;
  // ////puedo desetructurar
  // //const {nombre, correo} = req.body

  // //PETICION POST: mandamos info al backend
  // res.json({
  //   mensaje: "envio un usuario",

  //   //RECIBIR EL CUERPO DE LA PETICION
  //   body,
  //   ////puedo desetructurar
  //   //nomre,
  //   //correo,
  // });

  //!nueva configuracion---------------------------------
  const datos = req.body;
  const { nombre, correo, password, rol } = datos;

  const usuario = new Usuario({ nombre, correo, password, rol });

  //Validaciones
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    return res.status(400).json({
      msg: "El correo ya existe",
    });
  }

  //Encriptar contraseña

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
