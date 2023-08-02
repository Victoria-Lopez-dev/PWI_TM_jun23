//Arrays -> vectores , listas
//[dato,dato]

//indice ??
//array[indice]

let edad=12;
let un_nombre="Martina";

//indice        0        1      2      3       4          5        6   7
const nombres=["Juan","Jose","Carla","Marta","Esteban",un_nombre,edad,true]//Array

//console.log(nombres)

//console.log(nombres[5])//me trae por consola al dato que esta en el indice 1


const alumnos=[];



//metodos

//agrego items a la lista

//array.push(valor) -> agrega al final de la lista

alumnos.push("Sole","Santiago","Daman","Laura","Javier","Eugenia")
alumnos.push("Manuel")

//array.unshift(valor) -> agrega al inicio de la lista, cambia los indices que tenian
alumnos.unshift("Carla")

console.log(alumnos)
//sacar items

//array.pop() -> saca el ultimo item y si quiero puedo guardarlo en una variable o no

let manuel=alumnos.pop()//saco a Manuel
alumnos.pop()
//array.shift() -> saca el primer item
let carla=alumnos.shift();
alumnos.shift()

//saca items que este en cualquier posicion o los reemplaza

//array.splice(indice,cantidad,nuevoValor)

//alumnos.splice(3,1) saca solamente al item de indice 3 

alumnos.splice(1,2,"Damian","Laura Nuevo")

console.log(alumnos)
console.log(manuel,carla)
//console.log(alumnos[2])

let productos=["pantalon",'remera','zapatilla'];

//indice      0   1  2   3  4  
let totales=[200,400,10,50,800]

productos.splice(1,1);
console.log(productos);
totales.splice(2,3,'HOLA')
console.log(totales );

// prompt() -> funcion nativa de JS 
//el valor recibido en un prompt() es un STRING!

// let algo=prompt("escriba algo");

// console.log(algo)

// let nuevo_nombre=prompt("Ingrese el nombre del alumno/a/e");

// //agregar a la lista de alumnos ??

// alumnos.push(nuevo_nombre)

// console.log(alumnos)

//array.indexOf(valor) -> me devuelve el indice en que se encuetnra ese valor

console.log(alumnos.indexOf("Laura Nuevo"))

console.log(alumnos.length)

//length -> cantidad de items de la lista
//cantidad de items va a ser uno mas que el numero mayor de indice







