| [home](../home.md) | [blaster](../blaster.md) | [about](../about.md) |

# Roadmap to BLASTER

BLASTER methodology aims to learn by building projects. 
But you can't learn if you don't have enough foundations to understand the projects. 
In this roadmap I propose an itinerary so that with my help you will be able to write complex AJAX web projects in just a few months.
But I encourage you to learn by building in a group and be supervised by a qualified instructor.

## páginas web estáticas
### solvantes
* Cuadrante de multiplicaciones estático
* https://rafaelaznar.github.io/solvantes/
* https://github.com/rafaelaznar/solvantes
## procesamiento en frontend
### olimanto
* Cuadrante de multiplicaciones dinámico. 
* Procesamiento en entorno cliente con Javascript ES6. 
* Con formulario generador de tabla y validaciones. 
* Generación funcional de tabla.
* https://github.com/rafaelaznar/olimanto
### sorteo
* An ad free program to draw (to raffle) prizes among some participants.
* jQuery & Bootstrap
* https://rafaelaznar.github.io/sorteo/
* https://github.com/rafaelaznar/sorteo
### sinatec
* Cuadrante de multiplicaciones dinámico. 
* Procesamiento en entorno cliente con Javascript, jQuery & Underscore. 
* Con formulario generador de tabla y validaciones. 
* Generación funcional de tabla.
* https://github.com/rafaelaznar/sinatec
### clisela
* Cuadrante de multiplicaciones dinámico.
* Generado con procesamiento en entorno cliente.
* Con Javascript, JQuery y Bootstrap.
* https://rafaelaznar.github.io/clisela/
* https://github.com/rafaelaznar/clisela
### elicudo
* Cuadrante de multiplicaciones dinámico.
* Procesamiento en entorno cliente con Javascript y JQuery.
* Con botón generador de tabla.
* https://rafaelaznar.github.io/elicudo/
* https://github.com/rafaelaznar/elicudo
### sistelar
* Cuadrante de multiplicaciones dinámico.
* Procesamiento en entorno cliente
* Con Javascript, JQuery y Bootstrap.
* Con botón generador de tabla.
* Con cambio en la devolución de las funciones respecto de elicudo para entender callbacks.
* https://rafaelaznar.github.io/sistelar/
* https://github.com/rafaelaznar/sistelar
## procesamiento en backend
### mondublio
* Práctica de introducción conceptual a JSP
* https://github.com/rafaelaznar/mondublio
### glodivario
* Cuadrante de multiplicaciones JSP
* Entorno servidor
* https://github.com/rafaelaznar/glodivario
### dolumado
* Cuadrante de multiplicaciones en entorno servidor (doble)
* Inclusiones estáticas
* Inclusiones dinámicas sin parámetros
* Inclusiones dinámicas con parámetros
* https://github.com/rafaelaznar/dolumado
### icosalino
* Cuadrante de multiplicaciones JSP.
* Es una modificación de glodivario
* Usa un método multiplicación en JSP definido mediante etiquetas <%! %>
* https://github.com/rafaelaznar/icosalino
### plexura
* Cuadrante de multiplicaciones JSP.
* Con formulario html alto/ancho. 
* Validación de servidor.
* https://github.com/rafaelaznar/plexura
### bizarte
* Servlets hola mundo de ejemplo
* Introducción a los servlets
* Estudio del web.xml → servlet control welcome page
* Servlet control multilínea
* Servlet holamundo unilínea
* Página index.html no welcome
* https://github.com/rafaelaznar/bizarte
### paramitario
* Parameter reception in a servlet
* https://github.com/rafaelaznar/paramitario
### dado
* https://github.com/rafaelaznar/dado
### Cantinol
* Cuadrante de multiplicaciones dinámico de entorno cliente.
* Procesamiento en entorno cliente con Javascript y AngularJS.
* Con formulario y validaciones.
* https://github.com/rafaelaznar/cantinol
## AJAX
### sorivio
* Cuadrante de multiplicaciones dinámico AJAX.
* Procesamiento en entorno servidor con servlet y gson.
* Respuesta json en bloque.
* Con formulario generador de tabla.
* Petición AJAX con jQuery.
* https://github.com/rafaelaznar/sorivio
### Jaxonne
* Cuadrante de multiplicaciones dinámico AJAX.
* Servidor:
  * Procesamiento en entorno servidor con servlet con respuesta HTML en bloque.
  * Validación de servidor
* Cliente:
  * jQuery
  * Con formulario generador de tabla y envio AJAX con jQuery. *
* https://github.com/rafaelaznar/jaxonne
### sambados
* BackEnd
  * Servlet con TOMCAT
  * Cuadrantes con respuesta JSON en bloque
* FrontEnd:
  * ES6
* https://github.com/rafaelaznar/sambados
### Anapracis
* Cuadrante de multiplicaciones dinámico AJAX.
* Procesamiento en entorno servidor con servlet y gson.
* Respuesta json celda a celda con delay opcional.
* Con formulario generador de tabla.
* Petición AJAX con jQuery.
* https://github.com/rafaelaznar/anapracis
### gadelanier
* Cuadrante de multiplicaciones dinámico AJAX
* Procesamiento en entorno servidor con servlet y gson
* Respuesta json celda a celda con delay opcional
* Con formulario generador de tabla. Petición AJAX con jQuery.
* Detección de finalización de proceso mediante promesas.
* https://github.com/rafaelaznar/gadelanier
### Sermiller
* Servidor CORS.
* Cuadrante de multiplicaciones dinámico AJAX.
* Procesamiento en entorno servidor con servlet y gson. Respuesta json celda a celda con delay opcional.
* Para ejecutar con cliente CORS elopy.
* https://github.com/rafaelaznar/sermiller
### Elopy
* Cliente CORS para servidor sermiller: Cuadrante de multiplicaciones dinámico AJAX.
* Procesamiento en entorno servidor con servlet y gson.
* Respuesta json celda a celda con delay opcional.
* Con formulario generador de tabla. Petición AJAX con jQuery. CORS.
* https://github.com/rafaelaznar/elopy
## DB
### Minous
* Conexión a la base de datos genérica con driver manager o data source. Fichero de propiedades.
* https://github.com/rafaelaznar/minotus
### Romcixo
* Conexión genérica con pools de conexiones.
* https://github.com/rafaelaznar/romcixo
## autenticación
### Miriase
* Servidor de autenticaciones basado en sesiones
* https://github.com/rafaelaznar/miriase
### Pusaldo
* Autenticación.
* Manejo de sesiones.
* Métodos GET, POST DELETE.
* Mejora de CORS.
* Basado en miriase.
* https://github.com/rafaelaznar/pusaldo
### Sepivos
* Se trata de un servidor de autenticación con las operaciones login, logout, check y acceso autenticado a parte privada.
* No accede a bases de datos.
* Las contraseñas en SHA-256 están escritas programáticamente.
* Implementa CORS mediante un filtro.
* El filtro no funciona en Tomcat 10, debe usarse una versión anterior.
* Se usa con un cliente kolsany (https://github.com/rafaelaznar/kolsany)
### kolsany
* Aplicación básica en Angular. Cliente de autenticación para servidor miriase/pusaldo/sepivos. Enrutamiento de cliente. Validación con formulario reactivo. CORS. Llamadas AJAX al servidor con RxJS en servicio. Control de la sesión AJAX check con localstorage. Funcionalidad: formulario de login con password. Envío de contraseña codificada SHA-256. Acceso a ver el contenido secreto si previamente el usuario se ha autenticado. Formulario de logout para salir del sistema.
* https://github.com/rafaelaznar/kolsany
## APIs remotas
### Flickice
* Acceso remoto a la API de Flickr
* https://github.com/rafaelaznar/flickice

