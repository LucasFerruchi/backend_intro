const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.listen();

//!22/03 cont 1:17:00

/*
1-CREAR

Modelo de curso
Ruta de cursos
Controlador de cursos
db-validator - esCrusoValido
serve agregar el path en el constructor y la ruta en routes

-----------------------------------------------------------------------------

2-CREAR BUSCADOR

routes - buscar.js
controllers - buscarCtrl.js - funcion principal y por termino
        !REGEX

-----------------------------------------------------------------------------

3-CONFIGURAR EL SERVER

-----------------------------------------------------------------------------

4-PROBAR EN POSTMAN

-----------------------------------------------------------------------------

5-HACER DOCUMENTACION DEL BACKEND
        a-en los "..." de la coleccion, seleccionar 
        "View documentation", se generara la doc

        b-cambiar el lenguaje a JavaScript Fetch

        c-Publish
                .seleccionar el Environment
                ..Publish
        
        d-Ver la url que brinda 

*/
