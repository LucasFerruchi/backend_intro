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

  //recibir cuerpo de la peticion
  const datos = req.body;
  const { nombre, correo, password, rol } = datos;

  const usuario = new Usuario({ nombre, correo, password, rol });

  //Verificar si exite el correo - metodo findOne
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    return res.status(400).json({
      msg: "El correo ya existe",
    });
  }

  //!BCRYPTJS 2 - Encriptar contraseña

  //SIGUIENTE CODIGO COPIAR DE LA DOC DE BCRYPT
  // var salt = bcrypt.genSaltSync(10);
  // var hash = bcrypt.hashSync("B4c0/\/", salt);

  const salt = bcrypt.genSaltSync(10);
  // //  reemplazar el primer parametro por password
  // const hash = bcrypt.hashSync(password, salt);
  // usuario.password = hash;
  //lo podemos hacer en una linea
  usuario.password = bcrypt.hashSync(password, salt);
  //!------------------------------------------------------

  //Guardar en BD
  await usuario.save();

  res.json({
    usuario,
    // nombre,
    // rol,
    /*
    mostrar como figura el password encriptado,
    descomentando usuario y comentando nombre y rol.
    ..eliminar usuarios de la base de datos
    ..mostrar en postman
    */
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
