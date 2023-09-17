const Rol = require("../models/rol");
const Usuario = require("../models/usuario");

//funcion, encontrar el rol
const esRolValido = async (rol) => {
  const existeRol = await Rol.findOne({ rol });

  if (!existeRol) {
    throw new Error(`El rol ${rol} no existe en la base de datos!`);
  }
};

//funcion, para encontrar email
const esEmailValido = async (correo) => {
  const existeEmail = await Usuario.findOne({ correo });

  if (existeEmail) {
    throw new Error(`El correo ${correo} ya existe en la base de datos!`);
  }
};

//funcion para verifiar el id y saber si el USUARIO existe
const esIdValido = async (id) => {
  //metodo especifico para encontrar id
  const existeUsuario = await Usuario.findById(id);

  if (!existeUsuario) {
    throw new Error(`El Id ${id} no corresponde a ingún usuario registrado`);
  }
};

module.exports = {
  esRolValido,
  esEmailValido,
  esIdValido,
};

//!Exportar la funcion a la ruta post "carpeta routes/usuarios.js"
