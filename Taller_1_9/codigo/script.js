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

//a.style.display="block"


/*

6. Haciendo uso del DOM y eventos, lograr obtener los dos numeros que el usuario ingreso en los inputs de la zona “números” y devolver dentro del recuadro violeta el promedio de ambos.

*/

//promedio : divido en dos el resultado de la suma

//obtener el valor de los dos inputs y sacar el promedio
/*
let numero1=document.querySelector("#num1");
let numero2=document.querySelector("#num2");
*/
const funcionEj6=(event)=>{
  event.preventDefault()//para que no mande el formulario y reinicie (accion por defecto)


let numero1=document.querySelector("#num1").value;
let numero2=document.querySelector("#num2").value;
/* numero1.value , numero2.value */

    
    let suma=parseInt(numero1)+parseInt(numero2);

   
    let promedio=suma/2;

    //ponerlo en el recuadro violeta
    let recuadro_violeta=document.querySelector(".violeta");
    recuadro_violeta.innerHTML=`<p>${promedio}</p>`
}

/*

7. Utilizando los métodos y propiedades vistas en DOM y un poco de eventos, lograr que al pasar el mouse por la imagen de la puerta ,esta se reemplace por la imagen del payaso.

*/
//onmouseover()
//tomar a la imagen y cambiar su atributo src 
let payaso=false;

const cambioImagen=(nodoImg)=>{
    console.dir(nodoImg)
//nodoImg lo pasamos en HTML con this
/*
si queremos que cuando deje de pasar el mouse por encima vuelva a colocar la puerta */
    if(payaso == false){
         nodoImg.setAttribute("src","./images/payaso.jpg")
         payaso=true
    }else{
        nodoImg.setAttribute("src","./images/puerta.jpg")
        payaso=false
    }
   


}

/*
si queremos que cuando deje de pasar el mouse por encima vuelva a colocar la puerta

en la imagen (HTML)->onmouseleave="ponerPuerta()"

const ponerPuerta=()=>{
    let imagen=document.querySelector("#imagen-cambio");

    imagen.setAttribute("src","./images/puerta.jpg")
}
*?

//otra alternativa (sin el evento en el HTML);

//dos maneras de utilizar eventos
/* 
imagen.addEventListener('mouseover',()=>{
    imagen.setAttribute("src","./images/payaso.jpg")
})*/