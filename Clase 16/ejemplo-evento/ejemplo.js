let diccionario=[{
    palabra:"HOISTING",
    definicion:`Término;para;describir;que;las;declaraciones;de;variables;y;funciones;son;desplazadas;a;la;parte;
    superior;del;scope;más;cercano,;scope;+lobal;o;de;función`
},{
    palabra:"DESTRUCTURING",
    definicion:` Expresión;de;JavaScript;que;hace;posible;descomprimir;valores;de;arrays;o;propiedade;de;objetos;
    en;distintas;variables.`
}]

//hacer una funcion para que busque entre las palabras del diccionario y nos muestre en el recuadro verde la definicion.

//si no tenemos la palabra definida,le escribimos que no la tenemos a la definicion..
let pResultado=document.getElementById("resultado");

let buscarPalabra=(event)=>{
    //preventDefault() -> no hacer la accion por defecto que tiene programada 
   event.preventDefault();
   
  // console.dir(event.target)accedo a <form>
   /*let input=event.target.children[1];//accedo al input del formulario*/

   let input=document.querySelector("#palabra");//llamamos al input donde colocamos la palabra
    

let palabraBuscador=input.value;//obtengo el valor del input

    let palabraEncontrada=diccionario.find((objeto)=>objeto.palabra === palabraBuscador.toUpperCase());//busco si esta la palabra en el diccionario

    if(palabraEncontrada === undefined){

        pResultado.textContent="no se encontro la palabra";
    }else{
        pResultado.textContent=palabraEncontrada.definicion;
    }
}

//buscarPalabra("HOISTING")

//toLowerCase() toUpperCase() -> metodos para que un string sea en mayuscula o minuscula
//lenght - parseInt() - parseFloat() - toString()....


//---------------- Otro ejemplo

//click en el boton cambie el fondo del body a blue
//cuando el fondo sea azul, el boton dice "Noche",
//cuando el fondo no es azul , el boton dice "Dia"

//evento -> click
//en donde ? boton 
//accion? -> cambiar el fondo del body a blue

// USANDO -> onclick HTML + Funcion 
let dia=true;

const cambiarFondo=(event)=>{

    dia=!dia;//cambiamos a la variable para que permita que sepa si estamos en tema dia o noche

   //event -> objeto con toda la data del evento,

    // event.target ->nodo en el que ocurrio el evento
    //llamar al nodo de body

    let body=document.querySelector("body");
   
    

    //cambiar el fondo de color
    body.classList.toggle("fondo-azul")

    if(dia === false){

        //boton .textContent="Noche"
        event.target.textContent="Noche"
    }else{
         //boton .textContent="Dia"
         event.target.textContent="Dia"
    }

};
//this -> nodo en el que se produjo el evento
//event -> data del evento que ocurrio

/* si usamos this -> const cambiarFondo=(this)=>{
    //....
    if(){
        this.textContent="Noche"
        ...
    }
}
*/
//que pongo como condicion en el if?
//como obtengo al boton para cambiar el nombre ?
//uso textContent para cambiar el valor del boton


//USANDO -> addEventListener() 
/*
!== //distinto ! //not | ! -> no

dia =true
!dia -> !true -> false
    ->  !false -> true*/


    //Martes 22 taller -> SIN DOM -EVENTOS 10hs

    //Miercoles 23 -> asincronia POO 
    
    //taller DOM -> Clase 18 o agregamos un taller por fuera de cronograma
