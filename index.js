const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.listen();

//!CONT 06/03 1:02:00
/*
!COMENZAR CON TARJETA DE TRELLO

!a-CONTROLADORES
    1.Crear carpeta "controllers/usuariosCtrl.js"

    2.En "usuariosCtrl.js" hacer estructura 
    y funcion para la PETICION GET. Y agregar
    apiKey y LIMIT desde POSTMAN web

    3.En "usuarios.js", configurar la
    PETICION GET (recibe a la funcion
    de "usuariosGet.js" e "//!IMPORTARLA" )

    4.(detener y volver a levantar el proyecto y probar en POSTMAN)

    5.En "usuariosCtrl.js", crear el resto de las funciones

    6.(detener y volver a levantar el proyecto y probar en POSTMAN)

-----------------------------------------------------------
VALIDAR (//!NO VER AUN)

1.En las rutas, entre el path y la funcion. 
Tenemos que validar los datos

Ej: en "usuarios.js"

    router.delete("/:id", "VALIDAR", usuariosDelete);
-----------------------------------------------------------

!b-VARIABLES DE ENTORNO

1.Crear el archivo ".env", donde creamos las variables de entorno
2.PORT=8080

3.# b-En "index.jsx" agregar el require("dotenv").config();

4.En "server.js". Agregarla en el constructor
5.Configurar el "listen"

6.Agregar a .gitignore el archivo .env
Esto es para EVITAR que cuando subamos nuestro proyecto
a GITHUB nuestra ruta a la base de datos SEA PUBLICA
-----------------------------------------------------------

!env.template

copiamos los mismos comandos que hay en .env, para subir esos
datos a github (pero sin sus valores). Para que en el README
podamos especificar al usuario que debe agregar el archivo .env
y completar los datos de conexion
*/
//-----------------------------------------------------------
//-----------------------------------------------------------

/*
!SERVIDOR EN LA NUBE (deployar el proyecto)

1-En "package.json", agregar en scrpts

 "start": "node index.js",

 para que el servidor en la nube sepa que con ese comando 
 se levanta el proyecto

2-Ir a "railway", crear cuenta (con github) y nuevo proyecto
        a-deployarlo
        b-ir a settings/create domain

3-Probar el repo en el navegador directamente y luego
en POSTMAN 
        a-AGREGARLE /api/usuarios
        b-ANTEPONER https://

*/
