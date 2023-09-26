const jwt = require("jsonwebtoken");

/*necesitamos generar una promesa */

const generarJWT = (uid) => {
  return new Promise((resolve, reject) => {
    //crear payload
    const payload = { uid };

    /*generar el token Y 
        .en segundo parametro una VARIABLE DE ENTORNO
        .en tercer parametro la duracion*/
    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEY,
      { expiresIn: "4h" },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se puede generar token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generarJWT,
};

//!EXPORTARLA A "authCtrl.js - controllers"
