const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.listen();

//!15/03
/*
a-mostrar pagina JSON WEB TOKENS,
como se compone un token
        1-header, con el algoritmo y el tipo
        2-el payload, contiene la informacion
        3-la key
*/
