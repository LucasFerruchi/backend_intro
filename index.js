//!COMENZAR LA CLASE SIGUIENTO LA TARJ DE TRELLO
//!01/03

// console.log("Hola 52i");
// ---------------------------------

//!EXPRESS
/*
COMO IMPORTAMOS? ya no usamos "import"
usamos el const express= require ('express')
*/

////---------------------------------------------
// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// app.listen(3000);
////---------------------------------------------

/*
-La primera linea de este codigo, indica q estamos 
'importando express'
-La segunda, con 'app', nos esta dando acceso 
a los metodos de expres
-En la tercera, el metodo '.get', en el primer parametro
'donde esta haciendo la peticion' "/", seria 
a la direccion RAIZ. el segundo parametro es una 'funcion':
con un 'req' (es la peticion) y un 'res' (es la rsspuesta).
-En la cuarta, 'res.send', la respuesta del servidor con su 
contenico.
-por ultimo el 'app.listen' con el puerto de COMUNICACION

!correr el servidor con 'node index.js' en la terminal y 
!mostrar en el navegador el localhost
!PARAR EL SERVIDOR con 'ctrl+c'
IMPORTANTE: caa vez que aplicamos cambios, hay q DETENER   
el servidor y volver a ejecutarlo
*/

// !CREACION DE MODELOS
/*
1.crear carpeta 'models'/server.js
2.en server.js crear estructura y su constructor
---------------------------------------
! comentar el codigo de arriba y continuar con el de abajo
*/

//!3.RECIBIENDO A SERVER.JS (como importamos?)

const Server = require("./models/server");

const server = new Server();

server.listen();
//!----------------------------------------------------

/*
!4.CONTINUAR con 'MIDDLEWARES' en 'server.js'
a-agregarlo al constructor
b-definir carpeta publica y archivo de ejemplo 'index.html'
c-modificar la ruta en 'server.js' por  '/api/usuarios' 
*/
//!----------------------------------------------------

/* 
!5.Crear las peticiones GET, POST, PUT, DELETE
(agregar modificar y eliminar usuarios)
a-crear carpeta routes
b-componente usuarios.js/con su estructura, y hacer TODOS
los tipos de PETICIONES y sus RUTAS
d-configuro el "server.js"
e-PROBAR TODO en la extension THUNDER CLIENT
(cuando pruebe metodo put y delete agregar cualquier id,
sino dará error.
    ej: http://localhost:3000/api/usuarios/86544)
*/

//!----------------------------------------------------
//!6.POSTMAN
/*
a-Ir a POSTMAN y crear un nuevo "espacio de trabajo" 

b-ponerle el nombre de la comision

c-probar los pedidos
 */

//!----------------------------------------------------
//!7.COMO RECIBIR DATOS

/*
(!detener el SERVIDOR)
7.1-INSTLAR la dependencia "cors" y mostrarla en "npm"
7.2-en "server.js" IMPORTAR "cors" 
7.3-en "server.js/middlewares" agragar "cors"

----------------------------------------------------------

A-en server.js, middlewares. Agregar
"Leer lo que envia el usuario por el cuerpo de la peticion"

B-en POSTMAN (pagina web), 
configurar el BODY (raw/JSON), con un objeto

C-en usuarios.js, "router.post". Deberiamos recibir
el "cuerpo de la peticion"

(!levantar el SERVIDOR)
*/

//!----------------------------------------------------
//!8.MOSTRAR LA HOJA DE "CODIGOS (trello)"

//!CONT 06/03 21MIN
