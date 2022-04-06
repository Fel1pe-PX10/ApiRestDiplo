//Vamos a crear nuestro primer middleware
//Middleware condigo que se ejecuta antes o despues del
//manejo de una ruta(path)
//Mi primer Middleware validara si soy administrador
function isAdminMw(req, res, next) {
    //Error interno en el servidor
    //Si no envio el encabezado la propiedad isAdmin
    if(req.headers['isadmin'] === undefined) {
        res.status(500).send('Internal Error Server');
    }
    else if(JSON.parse(req.headers['isadmin'])) {
        //Si es admin continua con el flujo normal
        next();
    } else {
        //Si no es admin me retorna un error de acceso
        res.status(403).send('Forbidden Acess Denied');
    }
}

module.exports = {
    isAdminMw
}