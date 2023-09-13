const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.listen();

//!CONT 08/03 1:19:00

/*
!IMPORTANTE ANTES DE EMPEZAR
!SUPER IMPORTANTEEEEEEE

1-En "package.json", agregar en scrpts
!unica vez q vamos a tocar el package.json

 "start": "node index.js",

 !IMPORTANTE ANTES DE EMPEZAR
!SUPER IMPORTANTEEEEEEE
*/
/*
!NODEMON
1-Instalar libreria "nodemon" (de npm),
es para no estar deteniendo el proceso y levantarlo.

        a-se lo puede instalar de manera local "npm install nodemon"
        
        b-o instalar de manera global, para no tener q instalarlo 
        en todos los proyectos con "npm install -g nodemon"

!instalar en la terminal de WINDOWS

        c-EJECUTAMOS NODEMON en nuestro proyecto con el comando
        "nodemon index"

!NODEMON solo actua en nuestro repositorio local.

*/
//!---------------------------------------------------------

//!Modelo de usuario
/*
1-En models/usuario.js. Crear el schema y model

2-Crear el Usuario en la base de datos

        a-En "usuariosCtrl", importar Usuario desde models

        b-En "usuariosCtrl/usuariosPost", hacer la nueva
        configuracion, agregar "async"

3-Probar en POSTMAN

        a-Llamar a la url del proyecto y en la PETICION POST 
        agregar el siguiente objeto

{
    "nombre":"Lucas",
    "correo":"lucas@lucas.com",
    "password":"12345",
    "rol":"USER_ROLE",
    "edad":34
}

4-Verificar en MONGOCOMPASS
*/
//!---------------------------------------------------------

//!ENCRIPTACION DE CONTRASEÑA

/* 
!instalar "bcryptjs"

npm install bcryptjs

a - importarla en "usuariosCtrl.js"
b - usarla en "peticion POST"

PROBAR EN POSTMAN Y MONGODB COMPASS
*/
//!---------------------------------------------------------

//!VALIDACIONES

/*
!EXPRESS VALIDATOR

1.intalar

npm install --save express-validator

2- DONDE HACEMOS LAS VALIDACIONES????
 - como tienen q suceder ANTES de las PETICIONES
 las hacemos en routes/usuarios.js con el metodo CHECK

3-Importarlas y VALIDAR en "peticion post"
                .entre la ruta y la funcion 
                .entre corchetes
-------------------------------------------------------

4-Pero como hacemos para aplicar a todas las PETICIONAS
las validacion que acabamos de hacer en la POST????????

                A-Crear la carpeta middlewares/validar_campos.js
                B-Llevar la funcion a "routes/usuarios.js"
*/
