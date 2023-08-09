// Crear un array de numeros y usando if/else indicar si son pares o impares por
// consola3

//array de numeros
//if/else
//bucle 

//par

let numeros = [1,2,3,4,5,6,7,8,9,10]

function ejercicio1(){
  for (i = 0; i < numeros.length; i++) {
      let numero = numeros[i];

      if (numero % 2 == 0) { 
          console.log("El numero " + numero + " es PAR");
      }
      else{
          console.log("El numero " + numero + " es IMPAR")
      }    
  }
}

// % Resto ->  11/2 5 resto 1 4/2 resultado 2 resto 0

// for(let numero of numeros){
//     if (numero % 2 == 0) { 
//         console.log("El numero " + numero + " es PAR");
//     }
//     else{
//         console.log("El numero " + numero + " es IMPAR")
//     }  
// }

let valor="10.5"

console.log(valor.split("."))

// for(let numero of numeros){
//     let resultado=numero/2;
//     let resultado2=resultado.toString().split(".")
  
//      if (resultado2.length > 1) { 
//         console.log("El numero " + numero + " es IMPAR");
//     }
//      else{
//         console.log("El numero " + numero + " es PAR")
//      }  
// }

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    //Math.floor(numero / 2) -> 'redondea' el resultado

    if (numero / 2 === Math.floor(numero / 2)) {
      console.log(numero + " es un número par.");
    } else {
      console.log(numero + " es un número impar.");
    }
  }

  

