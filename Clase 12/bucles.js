/* bucle es iterar sobre una o varias mismas acciones varias veces */

let alumnos=[];
let productos=["remera","pantalon",'zapatilla',"buzo"];
let precios=[100,200,5000,454]

let alumno_nuevo;

// alumnos.push(alumno_nuevo)

/* for tradicional - for of - while - do while - for each - map */

/*
for(antes de iniciar el bucle;condicion;al final de cada vuelta){
    accion/es que quiero que se repitan
}
*/

/*
contador = 3+1  //4
*/
//                     4     < 4    
// for (let contador = 0; contador < 4; contador=contador+1) {
//     alumno_nuevo=prompt("ingrese nombre del alumno")
//     alumnos.push(alumno_nuevo)
//     console.log(contador)
// }

// console.log(alumnos)
console.log(precios)
for (let indice = 0; indice < 4; indice=indice+1) {
//        
    let nuevo_precio=precios[indice]*1.2;      
    precios.splice(indice,1,nuevo_precio)
}
console.log(precios)


//hacemos un bucle para sacar el total de todos los precios de la lista precios
let total=0

for (let indice = 0; indice<4; indice=indice+1) {
           
        total=total+precios[indice]
}
//...