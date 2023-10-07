const { response, request } = require("express");

//importar modelos
const Usuario = require("../models/usuario");
const Categoria = require("../models/categoria");
const Curso = require("../models/curso");

const coleccionesPermitidas = ["usuarios", "categorias", "cursos"];

//!hacer este cod LUEGO de la funcion PRINCIPAL---------------
//funciones para buscar por termino
//buscar usuarios
const buscarUsuarios = async (termino, res) => {
  //Expresiones regulares "regex" (busquedas especificas)
  const regex = new RegExp(termino, "i");

  const usuarios = await Usuario.find({
    //propiedad que pertenece al find
    $or: [{ nombre: regex }, { correo: regex }],
    //buscar usuarios activos
    $and: [{ estado: true }],
  });

  res.json({
    results: usuarios,
  });
};

//buscar categorias
const buscarCategorias = async (termino, re = response) => {
  const regex = new RegExp(termino, "i");

  const categorias = await Categoria.find({
    nombre: regex,
    estado: true,
  });

  res.json({
    results: categorias,
  });
};

//buscar cursos
const buscarCursos = async (termino, re = response) => {
  const regex = new RegExp(termino, "i");

  const cursos = await Curso.find({
    //propiedad que pertenece al find
    $or: [{ nombre: regex }, { descripcion: regex }],
    //buscar usuarios activos
    $and: [{ estado: true }],
  });

  res.json({
    results: cursos,
  });
};
//----------------------------------------------

//funcion de busqueda PRINCIPAL

const buscar = (req = request, res = response) => {
  const { coleccion, termino } = req.params;

  //validar coleccion
  if (!coleccionesPermitidas.includes(coleccion)) {
    return res.status(400).json({
      msg: `Las colecciones permitidas son ${coleccionesPermitidas}`,
    });
  }

  //buscar de acuerdo al termino
  switch (coleccion) {
    case "usuarios":
      buscarUsuarios(termino, res);
      break;

    case "categorias":
      buscarCategorias(termino, res);
      break;

    case "cursos":
      buscarCursos(termino, res);
      break;

    default:
      res.status(500).json({
        msg: "Error interno en realizar la busqueda!",
      });
      break;
  }
};

module.exports = {
  buscar,
};
