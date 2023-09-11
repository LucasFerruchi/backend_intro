const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { apiKey, limit } = req.query;

  res.json({
    mensaje: "recibo un usuario del controlador",
    apiKey,
    limit,
  });
};

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
