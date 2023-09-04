const Server = require("./models/server");

const server = new Server();

server.listen();

//!CONT 06/03 37MIN
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

!b-VARIABLES DE ENTORNO
*/
