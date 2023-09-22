const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.listen();

//!20/03
/*
1-CREAR CATEGORIA

        a-en "models/categoria.js"

        b-Agregar la ruta de categorias al constructor y a routes del server "models/server.js"

        c-en "routes/categorias.js"

*/
