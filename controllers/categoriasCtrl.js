const { response, request } = require("express");
const Categoria = require("../models/categoria");

//!GET
const obtenerCategorias = async (req = request, res = response) => {
  const { desde = 0, limite = 5 } = req.query;
  const query = { estado: true };

  const [total, categorias] = await Promise.all([
    Categoria.countDocuments(query),
    Categoria.find(query).skip(desde).limit(limite),
  ]);

  res.json({
    total,
    categorias,
  });
};

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

//!IMPORTARLA A LAS RUTAS

module.exports = {
  obtenerCategorias,
  obtenerCategoria,
};
