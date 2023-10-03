const { Schema, model } = require("mongoose");

const CategoriaSchema = Schema({
  //Nombre de la categoria
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },
  //Estado de la categoria
  estado: {
    type: Boolean,
    required: true,
    default: true,
  },
  //Usuario que la crea
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

module.exports = model("Categoria", CategoriaSchema);

//b-Agregar la ruta de categorias al constructor y a routes del server "models/server.js"
