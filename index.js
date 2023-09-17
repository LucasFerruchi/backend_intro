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
        agregar en el constructor y en routes agregar 
                
                this.authPath="/api/auth"

        y en routes agregar 

                this.app.use(this.authPath, require("../routes/auth"));
-----------------------------------------------------------

        2-en "routes" crear archivo auth.js
        3-en"controllers" crear archivo auth.js y exportarlo
        a "routes/auth.js"

        4-probar la ruta en POSTMAN y
        5-agregar en el body de la peticon correo y password

        6-configurar "auth.js - controllers"
        */
