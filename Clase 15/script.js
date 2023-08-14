//funciones -> creamos|definimos ejecutamos | imbocar
//tradicional 

/*
function nombre(parametros) {
    //acciones
}
*/
//funciones flechas / arrow functions
/*
const nombre=(parametros)=>{
    //acciones
}
*/

//nombre(parametros)

//objetos

let objeto={
    dato2:["valor","valor"] ,
    dato:true,
}
/*
console.log(objeto)

objeto.dato -> obtengo el valor de la propiedad
objeto.dato=nuevo valor..

*/
//indice       0       1 
//arrays -> ["bla","blabla"]
//array[0]

//length -> largo
//array.length -> 2
//"Marta" -> length -> 5

//DOM -> Document Object Model

//console.dir() -> ver el contenido del nodo.
//document -> palabra que hace referencia al HTML
//console.dir(document)


// 1- llamar al elemento|nodo del HTML
/* metodos para llamar a los elementos */

// getElementsBytagName() - getElementsByClassName() - querySelectorALl() -> traen array

//getElementById() - querySelector() ->trae nodo

//tipo etiqueta -> getElementsByTagName('etiqueta')//array

let parrafos=document.getElementsByTagName("p");//array

//clase ->getElementsByClassName("clase")
let subtitulos=document.getElementsByClassName("subtitulos");//array

//id ->getElementById("id")
let texto_particular=document.getElementById("texto1");//nodo


//selector -> querySelector("selector") |  querySelectorAll()

let titulo_h1=document.querySelector("h1");//nodo

let subtitulo=document.querySelector(".subtitulos");// primer nodo que tiene esa clase

let texto_id=document.querySelector("#texto1");

let todos_subtitulos=document.querySelectorAll(".subtitulos");//array con todos los elementos de clase "subtitulos"

let gato=document.querySelector("img");




//console.dir(texto_particular);





// 2- Acceder a las propiedades de los nodos que necesitemos

//innerText/ textContent -> propiedad de los nodos que nos muestra el texto interno de la etiqueta


//console.dir(parrafos[0].innerText);//array y objetos

//parrafos es un array
parrafos[0].textContent="nuevo contenido del parrafo..."
/*
for(let i=0;i< parrafos.length;i++){
    parrafos[i].innerText="nuevo contenido del parrafo...";
}*/
//nodo

texto_particular.textContent="Cambio otro contenido de este texto que llamamos por id ..."


//console.dir(gato)
//agergar una clase -> classList
//classList.add("clase")-> agregar clase/s
//classList.remove("clase") -> elimina la clase del elemento
gato.classList.add("ampliar")
//classList.toggle("clase")-> se fija si el elemento tiene la clase: si la tiene, la saca; si no la tiene, la agrega
gato.classList.toggle("gato")

//gato.classList.remove("gato")
gato.classList.remove("gato")


//----- cambio de estilos utilizando 'style'

console.dir(titulo_h1);

titulo_h1.style.textDecoration="underline"
