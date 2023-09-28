const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.listen();

//!15/03
/*
!a-mostrar pagina JSON WEB TOKENS,
como se compone un token
        1-header, con el algoritmo y el tipo
        2-el payload, contiene la informacion
        3-la key

!b-crear ruta de autenticacion
        1-en "models/server.js", 
        agregar en el constructor: 
                
                this.authPath="/api/auth"

        y en routes agregar:

                this.app.use(this.authPath, require("../routes/auth"));
-----------------------------------------------------------

        2-en "routes" crear archivo auth.js
        3-en"controllers" crear archivo authCtrl.js y exportarlo
        a "routes/auth.js"

        4-probar la ruta en POSTMAN y
        5-agregar en el body de la peticon correo y password

        6-configurar "authCtrl.js - controllers" con las verificaciones
        7-configurar "auth.js - routes" con validaciones

!c-token
        1-instalar libreria 

        npm i jsonwebtoken

        2-en "helpers", crear archivo generar-jwt.js 
        con su estructura y VARIABLE DE ENTORNO

        3-importar la funcion a "authCtrl.js - controllers"

        4-probar en POSTMAN - POST:login
-----------------------------------------------------------
        5-cambiar _id por "uid"
                .en "models/usuario.js"

!Proteccion de las rutas
        .porque hasta ahora hay acceso libre a todas
las rutas, necesito proteger el acceso. Porque los usuarios
comunes no deberian tener acceso a las rutas

        1-en "middlewares", crear archivo "validar_jwt.js"

        2-importarla a "routes/usuarios.js"
        agregarla y probarla en la peticion DELETE

        3-Probarlo en COMPASS Y POSTMAN
                a-hacer LOGIN en POSTMAN, en la peticion post:login
                con un USUARIO ACTIVO, hacemos de cuenta q es un 
                ADMIN, entonces le cambiamos su rol a
                "ADMIN_ROLE" (EN COMPASS), COPIAR su TOKEN.

                b-ir a PETICION DELETE en POSTMAN, y agregar
                en headers el "x-token" y pegar el TOKEN en VALUE.
                En la dir localhost: agregar el ID de otro OBJETO (copiar
                el id de COMPASS), que sera inactivado

                c-CORROBORAR en compass que el usuario cambio su
                ESTADO a FALSE

                d-VOLVER SU ESTADO A TRUE..directo en COMPASS
                e-en POSTMAN volver a hacer la peticion DELETE
                        .desactivando el x-token y probar

                        .activar el x-token y cambiarlo y probar

!mostrar el usuario que realizo la accion delete
        1-en "controllers/usuariosCtrl.js/usuariosDelete"
        2-llamamos a los datos del usuario desde "req"

!Entonces debemos ahora validar el ROL de los usuarios
        1-en "middlewares", crear archivo "validar-roles.js"

*/
