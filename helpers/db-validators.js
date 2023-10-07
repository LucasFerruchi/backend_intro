const Rol = require("../models/rol");
const Usuario = require("../models/usuario");
const Categoria = require("../models/categoria");
const Curso = require("../models/curso");

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

const esIdValido = async (id) => {
  const existeUsuario = await Usuario.findById(id);

  if (!existeUsuario) {
    throw new Error(`El Id ${id} no corresponde a ingún usuario registrado`);
  }
};

const esCategValido = async (id) => {
  const existeCategoria = await Categoria.findById(id);

  if (!existeCategoria) {
    throw new Error(`El Id ${id} no corresponde a una categoria existente!`);
  }
};

const esCursoValido = async (id) => {
  const existeCurso = await Curso.findById(id);

  if (!existeCurso) {
    throw new Error(`El Id ${id} no corresponde a un curso existente!`);
  }
};

module.exports = {
  esRolValido,
  esEmailValido,
  esIdValido,
  esCategValido,
  esCursoValido,
};
