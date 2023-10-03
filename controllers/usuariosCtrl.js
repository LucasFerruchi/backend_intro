const { response, request } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario");

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
  //   Usuario.countDocuments(query),
  //   Usuario.find(query).skip(desde).limit(limite),
  // ]);

  res.json({
    total,
    usuarios,
  });
};

const usuariosPost = async (req = request, res = response) => {
  //recibir cuerpo de la peticion
  const datos = req.body;
  const { nombre, correo, password, rol } = datos;

  const usuario = new Usuario({ nombre, correo, password, rol });

  const salt = bcrypt.genSaltSync(10);
  usuario.password = bcrypt.hashSync(password, salt);

  await usuario.save();

  res.json({
    usuario,
    mensaje: "Usuario creado correctamente",
  });
};

const usuariosPut = async (req = request, res = response) => {
  const { id } = req.params;

  const { password, ...updUsuario } = req.body;

  if (password) {
    const salt = bcrypt.genSaltSync(10);
    updUsuario.password = bcrypt.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, updUsuario, {
    new: true,
  });

  res.json({
    mensaje: "Datos actualizados",
    usuario,
  });
};

const usuariosDelete = async (req = request, res = response) => {
  const { id } = req.params;

  // !mostrar el usuario que realizo la accion delete
  const usuarioAdmin = req.usuario;

  // // BORRAR EL ELEMENTO DEFINITIVAMENTE -------------------
  // const usuarioBorrado = await Usuario.findByIdAndDelete(id);

  // res.json({
  //   mensaje: "Usuario borrado!",
  //   //mostramos la info del usuario inactivado
  //   usuarioBorrado,
  // });
  //-----------------------------------------------------

  // INFORMAR EL CAMBIO DE ESTADO -----------------------
  //metodo especifico para encontrar id
  const usuario = await Usuario.findById(id);

  if (!usuario.estado) {
    return res.json({
      msg: "El usuario ya esta inactivo!",
    });
  }

  const usuarioInactivo = await Usuario.findByIdAndUpdate(
    id,
    { estado: false },
    { new: true }
  );

  res.json({
    mensaje: "Usuario inactivo!",
    usuarioInactivo,

    // !mostrar el usuario que realizo la accion delete
    usuarioAdmin,
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
