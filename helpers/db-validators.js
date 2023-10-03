const Rol = require("../models/rol");
const Usuario = require("../models/usuario");
const Categoria = require("../models/categoria");

const esRolValido = async (rol) => {
  const existeRol = await Rol.findOne({ rol });

  if (!existeRol) {
    throw new Error(`El rol ${rol} no existe en la base de datos!`);
  }
};

const esEmailValido = async (correo) => {
  const existeEmail = await Usuario.findOne({ correo });

  if (existeEmail) {
    throw new Error(`El correo ${correo} ya existe en la base de datos!`);
  }
};

//funcion para verifiar el id y saber si el USUARIO existe
const esIdValido = async (id) => {
  const existeUsuario = await Usuario.findById(id);

  if (!existeUsuario) {
    throw new Error(`El Id ${id} no corresponde a ingún usuario registrado`);
  }
};

//funcion  CATEGORIA existe
const esCategValido = async (id) => {
  //metodo especifico para encontrar id
  const existeCategoria = await Categoria.findById(id);

  if (!existeCategoria) {
    throw new Error(`El Id ${id} no corresponde a una categoria existente!`);
  }
};

module.exports = {
  esRolValido,
  esEmailValido,
  esIdValido,
  esCategValido,
};
