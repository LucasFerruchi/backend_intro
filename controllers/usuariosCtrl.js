const { response, request } = require("express");

//!traigo la peticion get, de usuarios.js
// function (req, res) {
//     res.json({
//       mensaje: "recibo un usuario",
//     });
//   }

const usuariosGet = (req = request, res = response) => {
  //!PRIMERO
  /*
  En POSTMAN web. agregarle a la peticion GET, 
  una "apiKey"
  un "limit"
  !estos "parametros" van en la RUTA de la peticion
  */

  // //!configuro la funcion
  const { apiKey, limit } = req.query;

  res.json({
    mensaje: "recibo un usuario del controlador",
    apiKey,
    limit,
  });
};

//!a-5.En "usuariosCtrl.js", crear el resto de las funciones

const usuariosPost = (req = request, res = response) => {
  //COMO RECIBIR DATOS
  const body = req.body;

  //PETICION POST: mandamos info al backend
  res.json({
    mensaje: "envio un usuario",

    //RECIBIR EL CUERPO DE LA PETICION
    body,
  });
};

const usuariosPut = (req = request, res = response) => {
  res.json({
    mensaje: "modifico un usuario",
  });
};

const usuariosDelete = (req = request, res = response) => {
  res.json({
    mensaje: "borre un usuario",
  });
};

//!exportar
module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
