const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.listen();

//!CONT 13/03
/*
!crear base de datos con los roles de usuario

a.En MONGODB Compass
        1.Conctar nuestra base de datis
        2.crear nueva coleccion "rols"
        3.crear los objetos
                
}
  "rol": "USER_ROLE"
}

}
  "rol": "ADMIN_ROLE"
}

        4.en "models" creo el archivo rol.js

        !validar el rol
        5.crear "helpers/db-validators.js", funcion "esRolValido" 
        6.Exportar la funcion a la ruta post "carpeta routes/usuarios.js"
        7.en "models/usuario.js", comentar el "enum:" del "rol"

        8.PROBAR EN POSTMAN, creando un nuevo usuario 
        con un ROL q NO exista
        volver a probar con un rol que "si" existe

        !validar el email
        9.crear "helpers/db-validators.js", funcion "esEmailValido" 
        10.Exportar la funcion a la ruta post "carpeta routes/usuarios.js"
        11.en "controllers/usuariosCtrl.js" comentar la validacion del email

        12.PROBAR EN POSTMAN, creando un nuevo usuario 
        con un CORREO q exista
        volver a probar con un correo que "no" existe


*/
