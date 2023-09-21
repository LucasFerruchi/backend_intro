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
    unique: true, //indicamos que este dato es unico para cada usuario
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
    // enum: ["USER_ROLE", "ADMIN_ROLE"], //SE PUEDEN AGREGAR LA CANTIDAD QUE QUEREMOS
    // //para apps pequeñas
    // default: "USER_ROLE",
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

//!Quitar datos de la respuesta json
UsuarioSchema.methods.toJSON = function () {
  //desestructuramos los datos que NO queremos devolver
  const { __v, password, ...usuario } = this.toObject();
  //retornamos el resto de datos que quedaron gusradados en "usuario"
  return usuario;
};

//PROBAR EN POSTMAN CREANDO UN NUEVO USUARIO

module.exports = model("Usuario", UsuarioSchema);
