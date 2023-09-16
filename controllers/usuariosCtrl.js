const { response, request } = require("express");
//!BCRYPTJS 1.importo bcryptjs
const bcrypt = require("bcryptjs");
//!importo Usuario
const Usuario = require("../models/usuario");

//!-----------------------------------------------------
const usuariosGet = async (req = request, res = response) => {
  // //1.Cómo hago para traer a TODOS? - con metodo find
  // const usuarios = await Usuario.find();

  // res.json({
  //   usuarios,
  // });
  // /*crear en POSTMAN la respuesta get y guadarla, probar */
  // //------------------------------------------------

  //2.Cómo traigo parte de mis objetos?
  //recibe los "params" desde el front (POSTMAN)
  const { desde = 0, limite = 0 } = req.query;

  //COMO RESPONDEMOS?
  const usuarios = await Usuario.find().skip(desde).limit(limite);
  const total = await Usuario.countDocuments(); //motrara el total de objetos del array

  // //para OPTIMIZAR la respuesta y sea MAS RAPIDA AUN
  // const [total, usuarios] = await Promise.all([
  //   Usuario.countDocuments(),
  //   Usuario.find().skip(desde).limit(limite),
  // ]);

  res.json({
    total,
    usuarios,
  });
};
//!-----------------------------------------------------

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

//agregar el async
const usuariosPut = async (req = request, res = response) => {
  //DESESTRUCTURMOS Y OBTENEMOS ID
  const { id } = req.params;

  //obtener datos a actualizar, por ej:
  const { password, correo, ...resto } = req.body;

  //volver a sifrar el password
  if (password) {
    const salt = bcrypt.genSaltSync(10);
    resto.password = bcrypt.hashSync(password, salt);
  }

  //buscar el usuario y actualizarlo
  const usuario = await Usuario.findByIdAndUpdate(id, resto, { new: true });
  //como tercer param, le decimos que muestre los datos actualizados

  //agrego id y probar en POSTMAN
  res.json({
    mensaje: "modifico un usuario",
    // //comentar id
    // id,
    //agregar usuario
    usuario,
  });
};

/*Hacer la prueba en POSTMAN
agregando un BODY a la peticion PUT  

Actualizar mongodb compass
y prestar atencio que cambia el password y nombre
*/
//!-----------------------------------------------------

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
