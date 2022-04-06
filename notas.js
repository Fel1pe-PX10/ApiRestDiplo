/*
motor V8 (escrito en C++) -> web Assembling (es de bajo nivel y compila desde C o C++), esto es un formato de 
código binario para ejecutar cualquier script del lado del servidor

node es un framework escrito en C
de node sale Deno y hace lo mismo que node pero está más enfocado a la seguridad y está escrito en Rust

node  -> runtime environment + javascript library

Node -> 
- Asincrona
- Controlado por eventos
- Subprocesos
- MIT

Node conceptos
- Modulos
- console
- clusters
- add-ons
- bufer
- callbacks
- crypto
- error handling
- Red
- global -> multiplataformas
- dominios
- DNS
- Streaming
- debugger

Tres componentes que siempre deben estar claros
-> importación de módulos requeridos (require)
-> crear el servidor
-> leer solicitudes (request) y devolver respuestas (response) => todo esto se conoce como comunicación asíncrona

Codigos de respuesta http
100 - 199 respuestas informativas
200 - 299 respuestas existosas
300 - 399 respuestas redireccion
400 - 499 respuesta de errores cliente
500 - 599 respuesta de errores servidor

uri = url + urn
http://www.google.com/<cualquierpath>/algo.php?url=algomas

url = http://www.google.com/<cualquierpath>/
urn = www.google.com/<cualquierpath>/algo.php?url=algomas


REST -> Transferencia de estado representacional, nace en el año 2000 (antes del 2000 se utilizaba SOAP -> protocolo simple de acceso, y trabajaba con XML y los WDSL)
- Arquitectura 
- está empezando a ser reemplazado por GraphQL


API -> Interfaz de programación de aplicaciones -> una medio de comunicación de aplicaciones
API RESTFUL -> arquitectura rest, la cual permite la interacción con servicios web ... es como se usa (implementación) la arquitectura
Servicio web -> tecnologia que utiliza protocolos y estandares para intercambiar datos entre aplicaciones


Arquitectura REST
- Utiliza el protocolo HTTP
- Comunicación de datos
- Acepta -> XML, Json
- No tener abstracciones de patrones de intercambio de mensaje 

Caracteristicas:
- Protocolo Cliente Servidor Sin Estado (no guarda información, trata a cada petición como una transacción independiente)
- Operaciones bien definidas (CRUD)  C -> post, R -> get, U -> put patch, D -> delete
-

POST -> metodo que permite crear información en la base de datos
- body: información de que debe crear
response -> por buenas practicas debe tener el objeto que creó en la base de datos

PUT: se puede crear información PERO ES UNA MALA PRÁCTICA porque está para actualizar datos
- body: valor a reemplazar
response -> por buenas practicas debe tener el objeto que reemplazó en la base de datos
Se debe enviar todo el contenido o si no los dejaría como blanco

PATCH: Sirve para actualizar registros
a diferencia del PUT, solo se pasan los campos a reemplazar 



Express
Framework de node para conexiones a servidores con el protocolo http

Query pararms
- /cars?color=blue


Path params
- /cars/:color -> :color los dos puntos quiere decir que es un parametro dinámico


Middleware
- Función que se ejecuta antes o depués del manejo de una ruta (verica niveles de acceso, )


imporante (son las mismas de la "ruta")
- request  ->
- response -> 
-- Next -> verifica niveles de aceso (usuarios, administradores, etc)
           Validacion de datos
           Manejo de errores



Mongoose -> ODM para mongo
crear promsea a la conexión a mongo (base de datos)
validar la promesa 
crear un esquema
    Esquema en mogoose -> es una estructura json que contiene información acerca de las propiedades de un documento
crear modelo del esquema
    Modelo en Mongoose -> es un constructor que se compila a partir del esquema, es una instancia de un modelo de mongoose y se denomina documento. Esto es lo que me permite interactuar con la base de datos


Agregaciones  -> operaciones para procesar datos y devuelven resultados calculados.
              -> agrupan varios documentos 
en mongo se debe seguir el siguiente orden
1. Si quiere encontrar por una condicion especifica ($match)
2. Agrupar por una llave de propiedad dentro del documento ($group)
3. Ordenamiento de los resultados ($sort)

    db.automoviles.aggregate(
        [
            {
                $match: {marca: 'BMW'}
            },
            {
                $group: {
                    _id: '$marca',
                    contador: { $sum:1 }
                }
            },
            {
                $sort: {
                    contador: 1
                }
            }
        ]
    );

    db.automoviles.aggregate(
        [
            {
                $match: {tipo: 'sedan'}
            },
            {
                $group: {
                    _id: '$tipo',
                    avg: { $avg: "$modelo" }
                }
            },
            {
                $sort: {
                    avg: 1
                }
            }
        ]
    );

    db.automoviles.aggregate(
        [
            {
                $match: {tipo: 'sedan'}
            },
            {
                $group: {
                    _id: '$tipo',
                    suma: {$sum: "$modelo"},
                    conteo: {$sum: 1},
                    promedio: { $divide: ["$suma", 12] }
                }
            }
        ]
    );

    


*/
