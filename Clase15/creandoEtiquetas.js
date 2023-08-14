let section=document.querySelector("section");

let alumno={
    nombre:"Juan Perez",
    edad:40,
    cursos:["HTML y CSS","JS","Bootstrap"]
}

let nombrePersona="Ana Ruiz"
//crear un div con la clase tarjeta con el contenido...
//uso del DOM para crear elemenos y agregarlos al HTML
//metodo para crear y agregar etiquetas

//document.createElement("elemento")
let tarjeta=document.createElement("div");
let h4=document.createElement("h4");

console.log(tarjeta)



//le agrego la clase tarjeta ?? -> classList
//agrego contenido al h4 que creamos

// tarjeta.classList.add("tarjeta");
// h4.textContent="Juan Perez"

// //agregar esta etiqueta al HTML
// //appendChild() -> agrega un nodo a un elemento padre
// tarjeta.appendChild(h4)
// section.appendChild(tarjeta)


//------------------ otra alternativa


//innerHTML? -> me muestra en un string las etiquetas y el contenido HTML interno de esta etiqueta
let tarjeta1=document.querySelector("#tarjeta1");
 console.dir(tarjeta1.innerHTML);


 tarjeta.classList.add('tarjeta');

 tarjeta.innerHTML=`
    <h4 class='titulo-tarjeta'>${alumno.nombre}</h4>
    <p>${alumno.edad} años</p>
    <h5>cursos:</h5>
    <ul>
        <li>${alumno.cursos[0]}</li>
        <li>${alumno.cursos[1]}</li>
        <li>${alumno.cursos[2]}</li>
    </ul>

 `
//agregalo como hijo del nodo section
 section.appendChild(tarjeta)

//  let alumno={
//     nombre:"Juan Perez",
//     edad:40,
//     cursos:["HTML y CSS","JS","Bootstrap"]
// }

//`${}` -> me permite agregar codigo JS dentro de un string

//nodo.setAttribute("atributo","valor")

let imagen=document.querySelector("img");

imagen.setAttribute("src","./hamburguer.jpg");
/* otra manera de cambiar un atributo de una etiqueta por medio de sus propiedades: 
imagen.src="./hamburguer.jpg";
*/
