//Primero: Limpiamos el proyecto e instalamos las dependencias
//Segundo: En HTML, cambiamos el titulo e importamos las fuentes y creamos header, main, y footer
//Tercero: Creamos los estilos globales
//Cuarto: Creamos el componente header y lo insertamos
//Quinto: Creamos el componente footer y lo insertamos
//Sexto: Creamos la pagina HOme y la insertamos. 
//Septimo: Creamos la pagina gallery simple
//Octavo: Creamos la pagina About simple
//Noveno: Importamos estas dos paginas en main tambien
//Decimo: Le añadimos un id a cada uno de los links de header
//Onceavo: En el fichero main, le decimos que al hacer click en cada uno de ellos se pinta una pagina diferente.
//Duodecimo: Podemos refactorizar esta funcionalidad en una carpeta utils, almacenando una nueva función y así limpiamos el main. 
//Decimotercero: En gallery creamos un div para posteriormente inyectar las imagenes
//Decimocuarto: Creamos la funcion donde hacemos la petición y nos aseguramos de tener un catch para pintar en la galeria un mensaje de error si no se pudiera hacer la petición
//Decimoquinto: Por cada una de las fotos de la respuesta creamos un figure y lo inyectamos dentro de la galeria
//Decimosexto: Creamos un spinner que se mostrará en un div de la galeria desde el comienzo de la petición hasta el pintado de los elementos. En ese momento se vaciará el spinner.
//Decimoseptimo: Adicionalmente podemos componetizar este Spinner
//Decimooctavo: Creamos unos botones para pasar de pagina y lo podemos hacer mediante un bucle.
//Decimonoveno: La función que hace la petición recibe por argmento el numero de pagina, el cual se lanzara 1 por defecto y el numero que tenga cada uno de los botones dentro al hacer click en ellos.



import "./style.css"
import { printTemplate as Header } from "./components/Header/Header"
import { printTemplate as Footer } from "./components/Footer/Footer"
import { printTemplate as Home } from "./pages/Home/Home"
import { printTemplate as Gallery } from "./pages/Gallery/Gallery"
import { printTemplate as About } from "./pages/About/About"
import { linkpage } from "./utils/linkpage"

Header()
Footer()
Home()

linkpage("#homelink", Home);
linkpage("#gallerylink", Gallery);
linkpage("#aboutlink", About);



// document.querySelector("#homelink").addEventListener("click", () => {
//     Home()
// })

// document.querySelector("#gallerylink").addEventListener("click", () => {
//     Gallery()
// })

// document.querySelector("#aboutlink").addEventListener("click", () => {
//     About()
// })