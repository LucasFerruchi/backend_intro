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
    enum: ["USER_ROLE", "ADMIN_ROLE"], //SE PUEDEN AGREGAR LA CANTIDAD QUE QUEREMOS
    default: "USER_ROLE",
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("Usuario", UsuarioSchema);

//!pasar a crear el usuario en la base de datos en "usuariosCtrl.js"

/*
2-Crear el Usuario en la base de datos

        a-En "usuariosCtrl", importar Usuario desde models

        b-En "usuariosCtrl/usuariosPost", hacer la nueva
        configuracion, agregar "async"
*/
