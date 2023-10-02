const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.listen();

//!22/03

/*
1-CREAR

Modelo de curso
Ruta de cursos
Controlador de cursos
db-validator - esCrusoValido
serve agregar el path en el constructor y la ruta en routes

*/
