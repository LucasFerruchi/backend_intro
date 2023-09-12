const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.listen();

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

/*
!SERVIDOR EN LA NUBE (deployar el proyecto)

1-En "package.json", agregar en scrpts
!unica vez q vamos a tocar el package.json

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

//-----------------------------------------------------------
//-----------------------------------------------------------
/*
!MongoDB

1-Abrin mongoDB atlas, crean cuenta

2-Crear base de datos, configurar usuarios, y dir IP.
        a-llevar datos (usuario y password) a un bloc de notas

3-Conectar base de datos a travez de "MONGODB compass"

4-Copiar dir de enlace al bloc de notas y llevarlo al bloc de notas
        a-configurar la dir con usuario y password
        b-cambiar test por lucas

queda asi:

mongodb+srv://lucasFerruchi:1y6rN5FqxMgtEbgE@cluster0-lucas.44pmyjp.mongodb.net/lucasDB

5-Ir a mongoDB compass (aplicacion), pegar dir configurada
6-En VISUAL. .env/MONGODB_CNN=

7-mongoose (BUSCAR EN LA CARD DE TRELLO)
        A-instalar mongoose "npm install mongoose --save"

8-Crear carpeta "database" con el archivo "config.js"
        a-Hacer estructura mostrando un poco pag MONGOOSE

9-En "server.js" (modelo), llamar funcion "dbConnection" .

10-Levantar el servidor (node index.js) y ver en la teminal 
que recibimos el mens "Server Online port:8080" y
"Base de datos OnLine"

11-//!CREAR MODELO DE USUARIO
        a-En carpeta "models" crear archivo "usuario.js"
*/
