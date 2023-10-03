//modelo de datos de usuario

//nombre
//correo
//password
//img
//rol (user/admin)
//estado (true/false)

const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: true,
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

//!Quitar datos de la respuesta json
UsuarioSchema.methods.toJSON = function () {
  // //desestructuramos los datos que NO queremos devolver
  // const { __v, password, ...usuario } = this.toObject();
  // //retornamos el reso de datos que quedaron gusradados en "usuario"
  // return usuario;

  //----------------------------------------------------
  //!Cambiar _id por "uid"

  const { __v, password, _id, ...usuario } = this.toObject();
  usuario.uid = _id;
  return usuario;
};

module.exports = model("Usuario", UsuarioSchema);
