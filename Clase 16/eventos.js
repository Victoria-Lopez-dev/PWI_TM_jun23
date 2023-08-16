//EVENTOS
/*factores que participan: 

    - elemento a escuchar
    - el evento que ocurre en el elemento
    - accion a realizar como "respuesta" a ese evento
*/
//escucha de eventos -> handlers

//objeto event -> informacion sobre el evento que ocurrio.
//event.target -> accedemos al nodo en donde se produjo el evento.

//escuchando accion -> responderle con una funcion

//dos maneras:

//1- utilizando un atributo en HTML y una funcion en JS

//2- metodo -> addEventListener() | todo desde el JS

// nodoElemento.addEventListener("evento",()=>{})

/*---- manera 2 ----*/

//EJEMPLO

//hacer click en el boton "Cambiar Color" para cambiar el color del h1;

//evento: "click"

let botonColor=document.querySelector("#boton_cambio");
let bandera=false;//creamos una variable para identificar si es o no la primera vez que clickee
// let funcion=()=>{};

// botonColor.addEventListener("click",funcion)
/*botonColor.addEventListener("click",(event)=>{
    console.log(event.target);
    
    bandera=!bandera //
    let h1=document.querySelector("h1");

    if(bandera === true){
        h1.style.color="red"
        event.target.textContent="Color cambiado!"
    }else{
        h1.style.color="black"
        event.target.textContent="Cambiar color"
    }
   
    console.dir(h1)
    //otra alternativa
   // h1.classList.toggle("color-rojo");-> en CSS definimos al selector ".color-rojo" con propiedades de estilo

});*/
/*
botonColor.addEventListener("mouseover",()=>{
    // console.log(event)
    console.log("se paso el mouse sobre el boton")
})*/


/*---- manera 1 ----*/

//en el elemnto donde quiero que escuche le agrego el evento como atributo (on+evento) con la funcion como valor; y desde JS armo la funcion que quiero que se ejecute al realizar el evento
let p=document.querySelector("p")
console.dir(botonColor)

const cambioTexto=(e)=>{
    console.log(e)
    e.target.textContent="Cambio de titulo..."
};

function funcionCambio(parametro){
    
    console.dir(parametro)
    let h1=document.querySelector("h1");
    p.classList.toggle("show")
}



//obtener lo que va escribiendo el usuario en el input

//change -> ejecuta cambio en el nodo
//nodo.addEventListener(event,()=>{})

let input=document.getElementById("bla");

input.addEventListener("change",()=>{
    console.log(input.value)
});

// a la vuelta : objeto event - this

//event -> objeto que obtenemos una vez realizado el evento.Trae informacion sobre el evento: el tipo , en que elemento, cuanto tiempo,etc...

//this -> la referencia al mismo elemento en el que lo llamamos.trae un objeto |nodo del elemento
//la manera de llamar al nodo en el que se produce el evento (alternativa a event.target)

//asincronia - destructing spread operator.

//Clase 17 -> POO - JSON 

//Martes 22/08 taller 10hs.

