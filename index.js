const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.listen();

//!20/03  1:24:00
/*
1-CREAR CATEGORIA

        a-en "models/categoria.js"

        b-Agregar la ruta de categorias al constructor y a routes del server "models/server.js"

        c-en "routes/categorias.js" (rutas y validaciones)

        d-en "controllers/categorias.js" (funciones para controladores)
                1.GET obtenerCategorias
                2.GET obtenerCategoria

                3.POST crearCategoria
        
        e-PROBAR EN POSTMAN 

        f-hacer rutas PUT y DELETE de categorias y sus controladores
*/
