/* Condicionales  */

//evaluamos una situacion y segun su resultado , si se cumple o no esa condicion o situacion, hago una accion o no //booleanos

//if/else -> si/sino

//estructura
/*
if(condicion){
    accion/es a realizar si se cumple la condicion
}else{
    accion/es a realizar si NO se cumple la condicion
}

*/

//ejemplo: si es temprano, duermo un poco, sino me levanto 
let horario=12;

//  12     < 11 -> false
if(horario < 11){
   // alert("entramos en el if")
    console.log("puedo dormir un poco mas..")
}else{
   // alert("entramos en el else")
    console.log("arriba que se hace tarde!")
}

// entradas de peliculas -> si era mayor de edad o si venia con un chaperon

// usamos or || 

let edad=16;
let chaperon =false;


if( edad>=16 || chaperon == true ){
    console.log("Le vendo la entrada")
}else{
    console.log("no le puedo vender la entrada")
}

//si compro mas de 5 articulos le hago un descuento del 10%

//variable articulos -> numero con la cantidad de articulos que quiere comprar
let totalPrecio=1000;
let articulos=44

if(articulos>5){
    totalPrecio=totalPrecio-totalPrecio*0.1
    console.log(totalPrecio)
}
//...


//switch
//switch - case - break- default

// switch (expresion) {
//     case valor:
        
//         break;

//     default:
//         break;
// }

//dia de la semana 

let diaDeLaSemana="Lunes";
let clima="nublado";


switch(diaDeLaSemana && clima){
    case 'Lunes'&& "soleado":
        console.log("uñas verdes");
        totalPrecio=totalPrecio*0.5;
    break;

    case "Martes" :
        console.log("uñas azul");
        //...
        break;

    case "Miercoles" :
        console.log("uñas rojas");
    break;

    case "Jueves" :
        console.log("uñas Amarillas");
    break;

    case "Viernes" :
        console.log("uñas naranja");
    break;
    default:
        console.log("no nos pintamos las uñas")
        break;


}
//...
if(diaDeLaSemana ==="Lunes"){
    if(clima !="lluvioso"){
        //acciones
    }
}

// //si lo hacemos con un if?
// if(diaDeLaSemana === "Lunes"){
//     console.log("uñas verdes");
// }
// if(diaDeLaSemana === "Martes"){
//     console.log("uñas azul");
// }
// if(diaDeLaSemana === "Miercoles"){
//     console.log("uñas rojas");
// }
// if(diaDeLaSemana ==="Jueves"){
//     console.log("uñas Amarillas");
// }

// //if/else -> anidamiento

// if(diaDeLaSemana === "Lunes"){
//     console.log("uñas verdes");
// }else{
//     if(diaDeLaSemana === "Martes"){
//         console.log("uñas azul");
//     }else{
//         if(diaDeLaSemana === "Miercoles"){
//             console.log("uñas rojas");
//         }else{
//             if(diaDeLaSemana ==="Jueves"){
//                 console.log("uñas Amarillas");
//             }
//         }
//     }
// }

// //usando else if 
// if(diaDeLaSemana === "Lunes"){
//     console.log("uñas verdes");
// }else if(diaDeLaSemana === "Martes"){
//         console.log("uñas azul");
//     }else if(diaDeLaSemana === "Miercoles"){
//             console.log("uñas rojas");
//         }else if(diaDeLaSemana ==="Jueves"){
//                 console.log("uñas Amarillas");
// }

