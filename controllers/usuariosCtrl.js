const { response, request } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario");

const usuariosGet = async (req = request, res = response) => {
  const { desde = 0, limite = 0 } = req.query;

  const query = { estado: true };

  const usuarios = await Usuario.find(query).skip(desde).limit(limite);
  const total = await Usuario.countDocuments(query);

  res.json({
    total,
    usuarios,
  });
};

const usuariosPost = async (req = request, res = response) => {
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

  const usuarioAdmin = req.usuario;

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

    usuarioAdmin,
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
