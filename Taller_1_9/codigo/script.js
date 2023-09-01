//documento vacio para que puedan completar el codigo de los ejercicios 

/*
 1 -Utilizando lo visto de DOM ,cambiar el color de la tipografía de todos los <h2> a “orange”.
*/

let titulosh2=document.querySelectorAll("h2");//array


const cambio_color=()=>{
    for(let i=0; i < titulosh2.length; i++){
        titulosh2[i].style.color="orange"
   }
}

cambio_color()

/*

2. Lograr cambiar el tamaño de fuente del segundo párrafo del HTML a 16px.


let segundo_parrafo=document.getElementById("#texto2");

//segundo_parrafo.style.fontSize="16px";

//alternativa
segundo_parrafo.classList.add("texto16");

let parrafos=document.querySelectorAll("p");//array con todos los <p>, y el segundo en la lista va a tener indice 1 por qeu arranca desde 0

parrafos[1].style.fontSize="16px";
*/

/*

3. Utilizando el DOM, lograr agregar el atributo alt con una pequeña descripción de la imagen que se encuentra debajo del titulo “Cambiando la imagen”.

*/
//setAtributte()

let imagen=document.querySelector("#imagen-cambio");

imagen.setAttribute("alt","una puerta");


/*
4. Crear un boton con el valor “Pulsar” y agregarlo luego del titulo “Acciones” - Todo desde el DOM
*/

let boton=document.createElement("button")
boton.innerText="Pulsar";

/*
una alternativa 
let section=document.querySelector(".un_section")
let a=document.querySelector("a") 
section.insertBefore(boton, a)*/
//otra alternativa

let contenedor=document.querySelector(".contenedor-boton")
contenedor.appendChild(boton)



//Para que el <a> no quede al lado del Botón...

a.style.display="block"


/*

6. Haciendo uso del DOM y eventos, lograr obtener los dos numeros que el usuario ingreso en los inputs de la zona “números” y devolver dentro del recuadro violeta el promedio de ambos.

*/