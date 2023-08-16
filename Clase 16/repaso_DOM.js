//DOM 
//elementos del HTML -> nodos (objetoå)

//document -> documento HTML
//propiedades y metodos(funciones)

console.log(document)

//acceder | obtener nodo -> metodos

//su id, su clase, etiqueta ,selectores
//getElementsByTagName("etiqueta") , -> ARRAY
//getElementsByClassName("clase"), -> ARRAY
//getElementById("id")-> OBJETO

//querySelector("selector"), -> OBJETO  | nos trae el primer nodo que cumple con ese selector
//querySelectorAll("selector")-> ARRAY  nos trae a todos los nodos que cumplen con ese selector

let h1=document.querySelector(".titulo") //| # si es id | sin simbolo para etiquetas
let p=document.querySelector("p");

//acceder a las propiedades de los nodos -> nodo.propiedad
//textContent | innerText |innerHTML | style
//classList/.add()/remove()/toggle() | createElement() | setAttribute("atributo","valor") | appendChild()

console.dir(h1)

h1.classList.add("una-clase");

h1.style.color="red";

h1.textContent="un nuevo titulo"//propiedad

p.setAttribute("id",'unId');//metodo

//usando el nodoPadre.appendChild(nuevoHijo)
let section=document.querySelector("section");
let h2=document.querySelector("h2");

let nuevoP=document.createElement("p");
nuevoP.textContent="parrafo agregado con appendChild()...";

section.appendChild(nuevoP)

//nodoPadre.insertBefore(nuevoNodo,nodoReferencia) -> agrega antes del nodo referencia

let otroP=document.createElement("p");
otroP.textContent="OTRO  parrafo agregado con insertBefore()....";

section.insertBefore(otroP,h2)

//input value
let input=document.getElementById("bla");

console.log(input.value)//propiedad del nodo que me trae el valor de la etiqueta( lo que esta definido dentro del atributo value)

console.log(document.querySelector("#boton_form").value)

//EVENTOs...