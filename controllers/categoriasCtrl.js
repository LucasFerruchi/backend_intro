const { response, request } = require("express");
const Categoria = require("../models/categoria");

//!GET - categorias
const obtenerCategorias = async (req = request, res = response) => {
  const { desde = 0, limite = 0 } = req.query;
  const query = { estado: true };

  const [total, categorias] = await Promise.all([
    Categoria.countDocuments(query),
    Categoria.find(query)
      .skip(desde)
      .limit(limite)
      .populate("usuario", "correo"),
  ]);

  res.json({
    total,
    categorias,
  });
};
//EXPORTAR A RUTAS

//!GET - categoria
const obtenerCategoria = async (req = request, res = response) => {
  const { id } = req.params;

  //agregamos el metodo populate para traer los datos que me interesan del usuario que hace la peticion
  const categoria = await Categoria.findById(id).populate(
    "usuario",
    "nombre correo"
  );

  res.json({
    categoria,
  });
};
//EXPORTAR A RUTAS
//!---------------------------------------------------------------------------

//!POST - categorias
const crearCategoria = async (req = request, res = response) => {
  const nombre = req.body.nombre.toUpperCase();

  //Verificar si ya existe la categoria
  const categoriaDB = await Categoria.findOne({ nombre });

  if (categoriaDB) {
    res.status(400).json({
      msg: `La categoria ${categoriaDB.nombre} ya existes`,
    });
  }

  //generar la info que vamos a guardar
  const data = {
    nombre,
    usuario: req.usuario._id,
  };

  //crear categoria
  const categoria = new Categoria(data);

  await categoria.save();
  if (categoria) {
    res.status(201).json({
      categoria,
      msg: "La categoria fue creada con exito!",
    });
  }
};
//EXPORTAR A RUTAS
//!---------------------------------------------------------------------------

//!PUT - categorias
const actualizarCategoria = async (req = request, res = response) => {
  const { id } = req.params;

  const nombre = req.body.nombre.toUpperCase();
  const usuario = req.usuario._id;

  //actualizar la data
  const data = {
    nombre,
    usuario,
  };

  const categoria = await Categoria.findByIdAndUpdate(id, data, { new: true });

  res.status(201).json({
    msg: "Categoria actualizada!",
    categoria,
  });
};
//EXPORTAR A RUTAS
//!---------------------------------------------------------------------------

//!DELETE - categorias
const borrarCategoria = async (req = request, res = response) => {
  const { id } = req.params;

  const categoriaEliminada = await Categoria.findByIdAndUpdate(
    id,
    { estado: false },
    { new: true }
  );

  res.json({
    categoriaEliminada,
    msg: "Categoria eliminada!",
  });
};

//!IMPORTARLA A LAS RUTAS

module.exports = {
  obtenerCategorias,
  obtenerCategoria,
  crearCategoria,
  actualizarCategoria,
  borrarCategoria,
};
