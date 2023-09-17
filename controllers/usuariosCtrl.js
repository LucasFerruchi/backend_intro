const { response, request } = require("express");
//!BCRYPTJS 1.importo bcryptjs
const bcrypt = require("bcryptjs");
//!importo Usuario
const Usuario = require("../models/usuario");

//!-----------------------------------------------------
const usuariosGet = async (req = request, res = response) => {
  const { desde = 0, limite = 0 } = req.query;

  /*b-corregir el GET para actualizar la lista 
  y solo aparezcan los usuarios con estado true*/
  const query = { estado: true };

  //COMO RESPONDEMOS? (//!primero hacerlo sin el "query")
  const usuarios = await Usuario.find(query).skip(desde).limit(limite);
  const total = await Usuario.countDocuments(query); //motrara el total de objetos del array

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

const usuariosDelete = async (req = request, res = response) => {
  //DESESTRUCTURMOS Y OBTENEMOS ID
  const { id } = req.params;

  // // BORRAR EL ELEMENTO DEFINITIVAMENTE -------------------
  // const usuarioBorrado = await Usuario.findByIdAndDelete(id);

  // res.json({
  //   mensaje: "Usuario borrado!",
  //   //mostramos la info del usuario inactivado
  //   usuarioBorrado,
  // });

  //!-----------------------------------------------------

  // INFORMAR EL CAMBIO DE ESTADO -----------------------
  //metodo especifico para encontrar id
  const usuario = await Usuario.findById(id);

  //Informar el cambio de estado
  if (!usuario.estado) {
    return res.json({
      msg: "El usuario esta inactivo!",
    });
  }

  //encuentre el id y atualice el estado a false
  const usuarioInactivo = await Usuario.findByIdAndUpdate(
    id,
    { estado: false },
    { new: true }
  );

  //Buscar el usuario por su id
  res.json({
    mensaje: "Usuario inactivo!",
    //mostramos la info del usuario inactivado
    usuarioInactivo,
  });
};

/*
a-Probar en POSTMAN y COMPASS, copiando un id. Tanto el 
borrar como el cambiar de estado

b-corregir el GET para actualiar la lista y solo mustre
los usuarios activos..agregar la variable "query"
*/
//!-----------------------------------------------------

//!exportar
module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
