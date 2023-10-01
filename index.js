const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.listen();

<<<<<<< HEAD
//!CONT 06/03
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

!5.Configurar el "listen"

6.Agregar a .gitignore el archivo .env
Esto es para EVITAR que cuando subamos nuestro proyecto
a GITHUB nuestra ruta a la base de datos SEA PUBLICA
-----------------------------------------------------------

!env.template

copiamos los mismos comandos que hay en .env, para subir esos
datos a github (pero sin sus valores). Para que en el README
podamos especificar al usuario que debe agregar el archivo .env
y completar los datos de conexion

!HASTA ACA: terminamos la configuracion de nuestro SERVIDOR LOCAL
a partir de ahora, debemos configurar el SERVIDRO EN LA NUBE y la
BASE DE DATOS
*/
//-----------------------------------------------------------
//-----------------------------------------------------------
=======
//!CONT 08/03 1:19:00
>>>>>>> modeloUsuario

/*
!IMPORTANTE ANTES DE EMPEZAR
!SUPER IMPORTANTEEEEEEE

1-En "package.json", agregar en scrpts
!unica vez q vamos a tocar el package.json

 "start": "node index.js",

 !IMPORTANTE ANTES DE EMPEZAR
!SUPER IMPORTANTEEEEEEE

Agregar en middleware la sig linea

//recibir datos .json
    this.app.use(express.json());
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

<<<<<<< HEAD
queda asi:

mongodb+srv://lucasFerruchi:1y6rN5FqxMgtEbgE@cluster0-lucas.44pmyjp.mongodb.net/lucasDB

5-Ir a mongoDB compass (aplicacion), pegar dir configurada
6-En VISUAL. .env/MONGODB_CNN=

7-mongoose (BUSCAR EN LA CARD DE TRELLO)
        A-instalar mongoose "npm install mongoose --save"

8-Crear carpeta "database" con el archivo "config.js"
        a-Hacer estructura mostrando un poco pag MONGOOSE

9-En "server.js" (modelo), llamar funcion "dbConnection".
!copiar DE MONGODB COMPASS en ".env"

10-Levantar el servidor (node index.js) y ver en la teminal 
que recibimos el mens "Server Online port:8080" y
"Base de datos OnLine"

11-//!CREAR MODELO DE USUARIO
        a-En carpeta "models" crear archivo "usuario.js"
=======
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

!4-Verificar si existe usuario

!5-Guardar en base de datos

        a-En "usuariosCtrl", importar Usuario desde models

        b-En "usuariosCtrl/usuariosPost", hacer la nueva
        configuracion, agregar "async"

.Verificar en MONGOCOMPASS

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

//!TAREA
/*
Para poder trabajar con PETICION GET

crear 10 usuarios, desde postman con PETICION POST.
verificar que queden guardados en la DB
>>>>>>> modeloUsuario
*/
