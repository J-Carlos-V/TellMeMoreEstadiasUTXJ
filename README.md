
# Tell Me More ┊ Estadías UTXJ

![](https://github.com/J-Carlos-V/TellMeMoreEstadiasUTXJ/blob/main/Frontend/logo1.jpeg)





# Objetivo
Nuestro principal objetivo es dotar de información que ayude a los alumnos para la toma de decisiones al elegir el lugar donde realizarán sus estadías, todo esto a través de aportes de otros alumnos y exalumnos quienes ya hayan pasado por este proceso en dichas empresas o instituciones, quienes dando sus testimonios, experiencias y consejos, proveerán información de primera mano a aquellos buscando una opción de estadía y ayudándolos así a tener una mejor idea de cómo es la dinámica de las empresas en las que aspiran realizar dicho proceso.

# Integrantes 

**Seguridad en el Desarollo de Aplicaciones ▕  8° "A" IDGS**  
- Salim Rafael Castro Ortíz
- Flor Sarai Santiago Leonardo
- María José Segovia Santamaría
- Daniela Téllez Morales
- Juan Carlos Vivero Acevedo


		  
		  

# Tipos de usuarios
### Visitante
> Es el usuario que ingresa al sitio sin identificarse (loguearse), por ello no puede realizar posts, únicamente puede visualizar el contenido.
- Ingresar al sitio
- Podrá visualizar el contenido

### Usuario logueado
> Al loguearse, el usuario estará identificado y por tanto podrá aportar haciendo posts, tendrá también la capacidad de modificar los posts que ha realizado o eliminarlos si así lo desea.
- Ingresar al sitio
- Podrá visualizar el contenido
- Podrá hacer posts, modificar su contenido o eliminarlos (únicamente los propios)

### Administrador
> Será quien administre el contenido del sitio y verificará que se cumplan las normas dentro del mismo, por tanto, tendrá la capacidad de eliminar aquellos posts que infrinjan con las políticas de convivencia para mantener así un ambiente respetuoso.
- Administrará contenido (visualizar, crear o eliminar posts de los usuarios)
		  
		  
# Funcionalidades
**REGISTRO:** 

Habrá un registro a través de correo electrónico, para los usuarios que desean hacer uso de la aplicación posteando sus experiencias; ellos podrán postear, al igual que modificar y eliminar los posts que hayan realizado una vez completado el registro exitosamente.

------------

**POST DE EXPERIENCIAS:**

La aplicación tiene como principal funcionalidad contar experiencias de diferentes estudiantes de la Universidad Tecnológica de Xicotepec de Juárez en sus estadías, a través de un portal donde se mostrarán de forma ordenada su post y el cual podrán ser visualizados por otros usuarios, creando de esta manera una comunidad de experiencias para la comunidad estudiantil.
Ayudando así a otros usuarios conocer el panorama esperado al realizar su estadía de nivel TSU e Ingeniería. 

------------

**ELIMINAR/MODIFICAR:**

Dentro de la aplicación el usuario tendrá el privilegio de eliminar el post o bien modificarlo para posteriormente postearlo de nueva cuenta.
Sin embargo, el administrador podrá eliminar los posts que no cumplan con las políticas de convivencia de la aplicación sin solicitar permisos del autor del post.

------------



# Entorno de desarrollo
 Un entorno de desarrollo adecuado nos permitirá hacer el trabajo más cómodo y de manera más precisa, es por eso que para la realización de este proyecto se opto por usar las siguientes herramientas:

 ### Backend
Por la parte del Backend utilizaremos el servicio de Node Js en conjunto con el lenguaje de TypeScript para la ejecución del lado del servidor, además de ocupar las configuraciones y funcionalidades que nos brinda el framework Express.js, con estas herramientas interactuaremos con la base de datos SQL la cual será gestionada por MySQL en su versión 8.0.22.

![](https://github.com/J-Carlos-V/TellMeMoreEstadiasUTXJ/blob/main/Frontend/BackendTMM.jpg)

**NODEJS:**

Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript. Para nuestro proyecto lo utilizaremos como servidor.

------------

**TYPESCRIPT:**

TypeScript es un lenguaje para JavaScript a escala de aplicación. TypeScript agrega tipos opcionales a JavaScript que admiten herramientas para aplicaciones JavaScript a gran escala para cualquier navegador, para cualquier host y en cualquier sistema operativo. TypeScript se compila en JavaScript legible y basado en estándares. Se utilizará debido a que es el lenguaje principal de programación de Angular.

------------

### Base de Datos
Para la gestión de la base de datos utilizaremos una base de datos SQL, por la que estaremos trabajando con MySQL en la versión 8.0.22.
También utilizaremos la herramienta visual de diseño MySQL Workbench para el modelado y gestión de la base de datos, por lo cual el modelo de Entidad Relación como primera propuesta es la siguiente:

 ![](https://github.com/J-Carlos-V/TellMeMoreEstadiasUTXJ/blob/main/Frontend/Model_db_TellMeMore.png)


El diccionario de datos es el siguiente:

 ![](https://github.com/J-Carlos-V/TellMeMoreEstadiasUTXJ/blob/main/Frontend/FrontendDiccionario_db_TellMeMore.png)

 ### Frontend

**ANGULAR:**

Este será el framework con el que trabajaremos. Angular separa completamente el frontend y el backend en la aplicación, evita escribir código repetitivo y mantiene todo más ordenado gracias a su patrón MVC (Modelo-Vista-Controlador) asegurando los desarrollos con rapidez, a la vez que posibilita modificaciones y actualizaciones.

------------

**BOOSTRAP:**

Para el maquetado y diseño haremos uso de las herramientas de Bootstrap ya que al ser compatible con la mayoría de los navegadores nos dará ventaja sobre otros y nos permitirá que nuestra aplicación tenga una mejor vista y estructura. 

------------



### Otras Herramientas
**VISUAL STUDIO CODE:**

El entorno donde vamos a programar nuestra aplicación es visual studio code ya que es un editor de código gratuito y de código abierto e incluye soporte para depuración, control GIT integrado, resaltado de sintaxis, autocompletado con Intellisense y refactorización de código, es una buena opción por lo ligero y simple que es y las utilidades que aporta, además la cantidad de extensiones que permite personalizar totalmente el entorno y mejoran la experiencia a la hora de desarrollar cualquier aplicación Angular.

------------

# WireFrame

Esta herramienta nos sirve como guia visual de la aplicación, para tener un mejor panorama de como sera la aplicación cuando ya este terminada, son un recurso de gran valor en el desarrollo de aplicaciones, donde entran en juego la interfaz de usuario (UI) y la experiencia de usuario (UX) en las primeras etapas del diseño de aplicaciones y páginas web, y cómo el software logra que todo sea más fácil, rápido y eficiente.
Para este proyecto se utilizó Balsamiq una de las mejores herramientas para crear prototipos, bocetos o wireframes.

**Página Inicial**

La Pagina inicial contará con una barra de navegación y en el centro el Logo, un boton para Login de los Usuarios, y el contenedor donde se mostrará todas las experiencias expresadas por los usuarios y un footer mismo que se replicara junto con el header en los otros apartados.

 ![](https://github.com/J-Carlos-V/TellMeMoreEstadiasUTXJ/blob/main/Frontend/WireFrime.jpeg)

**-Login**

Para Compartir Una Experiencia sera necesario loguearse en la aplicación, por ello por medio de un boton nos enlazaremos a la pagina donde habra un formulario donde nos solicitaran correo electronico y contraseña para iniciar sesión y tener acceso a mayor funcionalidades.

![](https://github.com/J-Carlos-V/TellMeMoreEstadiasUTXJ/blob/main/WireFrime1.jpeg)

**-Registro**

Ahora bien si el usuario no tiene una Cuenta en la aplicación y quiere hacer uso de ella es necesario se registre, en la ventana de Registro habrá tres cajas de texto donde se solicitan 3 datos personales del usuario, su nombre, e-mail y contraseña, esos datos seran enviados a la base de datos por medio de un botón.

![](https://github.com/J-Carlos-V/TellMeMoreEstadiasUTXJ/blob/main/Frontend/WireFrime2.jpeg)
 
 **-Usuario**
 
 En esta ventana se registrara usuario y no contara con todas las funcionalidades, es un invitado al portal.
 
 ![](https://github.com/J-Carlos-V/TellMeMoreEstadiasUTXJ/blob/main/WireFrime3.jpeg)
 
 **-Página Portal de Experiencias**
 
 En este portal el usuario tendra una caja de texto donde escribira su experiencia y la empresa donde realizo su estadia, un boton de publicación, eliminación y otro donde podra modificar la experiencia publicada.
 
 ![](https://github.com/J-Carlos-V/TellMeMoreEstadiasUTXJ/blob/main/Frontend/WireFrime4.jpeg)
 
 **-Calificación**
 
 La aplicación tendra un apartado donde se podra calificar la empresa donde se realizo la estadia, de acuerdo a la experiencia del alumno.
 
 ![](https://github.com/J-Carlos-V/TellMeMoreEstadiasUTXJ/blob/main/WireFrime5.jpeg)	
 
	



------------





