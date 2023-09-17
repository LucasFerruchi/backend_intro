const { response, request } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario");

const login = async (req = request, res = response) => {
  //recibimos los datos desde el frontend
  const { correo, password } = req.body;

  //   res.json({
  //     msg: "login ok",
  //     correo,
  //     password,
  //   });

  try {
    //verificar el correo
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({
        msg: "Correo o password incorrectos",
      });
    }
    //!probar en POSTMAN

    //verificar si el usuario esta activo
    if (!usuario.estado) {
      return res.status(400).json({
        msg: "Correo o password incorrectos | usuario inactivo",
      });
    }
    //!probar en POSTMAN

    //verificar la contraseña - OJO la contraseña esta sifrada
    const validPassword = bcrypt.compareSync(password, usuario.password);
    //devuelve true o flase
    if (!validPassword) {
      return res.status(400).json({
        msg: "Correo o password incorrectos | password",
      });
    }
    //!probar en POSTMAN
    /*//!Antes de generar token
    7-configurar "auth.js - routes" con validaciones*/

    //generar token

    res.json({
      msg: "login ok",
      //   correo,
      //   password,
    });
  } catch (error) {
    console.log(error);
    //status 500 indica error en el backend
    return res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  login,
};
