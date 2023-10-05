const { response, request } = require("express");
const Curso = require("../models/curso");

//!GET - cursos
const obtenerCursos = async (req = request, res = response) => {
  const { desde = 0, limite = 0 } = req.query;
  const query = { estado: true };

  const [total, cursos] = await Promise.all([
    Curso.countDocuments(query),
    Curso.find(query)
      .skip(Number(desde))
      .limit(Number(limite))
      .populate("usuario", "nombre")
      .populate("categoria", "nombre"),
  ]);

  res.json({
    total,
    cursos,
  });
};
//EXPORTAR A RUTAS

//!GET - curso
const obtenerCurso = async (req = request, res = response) => {
  const { id } = req.params;

  const curso = await Curso.findById(id)
    .populate("usuario", "nombre")
    .populate("categoria", "nombre");

  res.json({
    curso,
  });
};
//EXPORTAR A RUTAS
//!---------------------------------------------------------------------------

//!POST - curso
const crearCurso = async (req = request, res = response) => {
  const { precio, categoria, descripcion } = req.body;
  const nombre = req.body.nombre.toUpperCase();

  const cursoDB = await Curso.findOne({ nombre });

  if (cursoDB) {
    res.status(400).json({
      msg: `El curso ${cursoDB.nombre} ya existes`,
    });
  }

  //Si no exste ya un curso con ese nombre, generar la info que vamos a guardar
  const data = {
    nombre,
    categoria,
    precio,
    descripcion,
    usuario: req.usuario._id,
  };

  //crear categoria - nueva instancia del modelo Curso
  const curso = new Curso(data);

  await curso.save();

  if (curso) {
    res.status(201).json({
      curso,
      msg: "Elcurso fue creada con exito!",
    });
  }
};
//EXPORTAR A RUTAS
//!---------------------------------------------------------------------------

//!PUT - curso
const actualizarCurso = async (req = request, res = response) => {
  const { id } = req.params;
  const { precio, categoria, descripcion, destacado } = req.body; // req.body.nombre.toUpperCase();

  const usuario = req.usuario._id;

  //actualizar la data
  const data = {
    precio,
    descripcion,
    categoria,
    destacado,
    usuario,
  };

  //Para actualizar el nombre
  if (req.body.nombre) {
    data.nombre = req.body.nombre.toUpperCase();
  }

  const curso = await Curso.findByIdAndUpdate(id, data, { new: true });

  res.status(201).json({
    msg: "Curso actualizado!",
    curso,
  });
};
//EXPORTAR A RUTAS
//!---------------------------------------------------------------------------

//!DELETE - curso
const borrarCurso = async (req = request, res = response) => {
  const { id } = req.params;

  const cursoEliminado = await Curso.findByIdAndUpdate(
    id,
    { estado: false },
    { new: true }
  );

  res.json({
    // cursoEliminado,
    msg: `Curso eliminado! - ${cursoEliminado}`,
  });
};

//!IMPORTARLA A LAS RUTAS

module.exports = {
  obtenerCursos,
  obtenerCurso,
  crearCurso,
  actualizarCurso,
  borrarCurso,
};
