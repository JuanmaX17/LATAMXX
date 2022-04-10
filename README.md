### Enviroment variables
Para que funcione esta aplicacion se deberia añadir las siguientes variables de entorno

MONGODB_URI
PORT


EN EL MENU, EN EL ENLACE REGISTRO EL CUAL LLEVA AL FORMULARIO DE REGISTRO, FUNCIONA CON UN onclick="window.location.href = 'http://localhost:3000/#registro'", deben reemplazar el localhost por el dominio del sitio


FINALMENTE, deben agregar todos los links de las redes sociales flotantes, y en general a su consideracion de experiencia y utilidad del sitio web.

Para procesar los pagos, se creo el fronted del formulario para pagar,pero deben encargarse de elegir su metodo de pago, les recomiendo integrarlo con Stripe toma alrededor de un sistema simple 30min.

Si van a crear nuevas rutas o paginas, deben siempre crear la peticion .verbo en routes/index.routes.js, luego dirigirse al controllers/task.controller.js y crear una const que se exporte en index.routes.js la cual cotendra el renderizado con el nombre de la pgina sin la extension .hbs en razon de que se configuro que todas las vistas tendran dicha extension, entonces se renderiza en el contralador y hacen los procesos ahi mismo que consideren necesarios.

Algo importante es saber que a la hora dwe cambiar o modificar lso archivos estaticos por ejemplos las img, no deben poner la palabra publi en la ruta de acceso en razon de que en app.js se configuro este prefijo por defecto en todos los archivos estaticos


<!-- corriendo nueva version 0.0.1 -->