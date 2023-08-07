let nombre="Juan";

//listas -> arrays [] -> se ennumeran con su indice
//          0       1   2 ...
let lista=["Ana",true,234];

//lista alumnos
let alumnos=['Juan',"Ana","Dario","Martina","Kevin","Soledad"];
console.log(alumnos)
//modificaciones -> metodos
//push() unshift() -> agregar elementos a la lista
//pop() shift() ->sacar elemntos de la lista
//splice() -> modificar, scar o agregar en cualquier lugar de la lista


//realizar una misma accion varias veces -> bucles o estructuras de repeticion
// console.log(alumnos[0]);
// console.log(alumnos[1]);
// console.log(alumnos[2]);
// console.log(alumnos[3]);

//-------------------------------------

//bucles for

/* 
    for(accion inicial ; condicion ; accion por vuelta){
        accion/es a repetir
    }
  siempre que mi condicion de TRUE -> hace la/s accion/es dentro de los parentesis
  cuando la condicion de FALSE -> se detiene y continua con lo escrito por fuera del for
 */
//contador de vueltas -> 
//condicion -> operadores se cumpla pero sabiendo que en algun punto no se va a cumplir para que detenga la iteracion de la ejecucion colocada
    //                      5          6
    // for(let contador=0; contador < alumnos.length; contador=contador+1){
    //     //console.log(alumnos[3])
    //     console.log(alumnos[contador])
    // }

   
//...

//length -> largo string|array (number)
//alumnos.length -> 6
// prompt() -> el usuario pueda agregar valor | formulario      
let nuevoAlumno=prompt("ingrese el nombre del alumno a cargar.Para finalizar escriba la palabra 'fin' ");

for(let contador=0; nuevoAlumno !== "fin" && contador< 5 ; contador=contador+1){
    //console.log(alumnos[3])
    alumnos.unshift(nuevoAlumno);
    nuevoAlumno=prompt("ingrese el nombre del alumno a cargar.Para finalizar escriba la palabra 'fin' ")
    console.log(contador)
}

console.log(alumnos)
 


//otra alternativa

// for(let nuevoAlumno=prompt("ingrese el nombre del alumno a cargar.Para finalizar escriba la palabra 'fin' ")
// ; nuevoAlumno !== "fin" ; 
//  nuevoAlumno=prompt("ingrese el nombre del alumno a cargar.Para finalizar escriba la palabra 'fin' ")){
//     //console.log(alumnos[3])
//     alumnos.unshift(nuevoAlumno);
   
// }

// console.log("Finalizo el bucle")

