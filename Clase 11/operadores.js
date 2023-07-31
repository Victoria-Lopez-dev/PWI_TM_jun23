// que cosas podemos hacer con los datos???

//OPERADORES


//Aritmeticos + - * /

//Suma o concatenacion (+)

30+20 // 50

const resultado="hola" + " " +"don" + " pepito" // "hola don pepito"

let numero=200;

numero +true
//console.log(resultado)

//resta (-)

"hola" - "pepe" //NaN
100 - 200.5

//multiplicacion y division (* , /)

let descuento= numero*0.5
10/ 2 //5
"hola"/ 8//NaN

// suma de dos numeros dividido 2 -> promedio de dos numeros

//(7+9)/2

//otra alternativa
let suma=7+9;
// let promedio = suma/2
// promedio)

suma/2

10+5-2

//(objeto) - herramienta que nos da JS para hacer cosas matematicas mas complejas Math+ punto+opcion que necesitamos

//-----------------------------
//De comparacion -> nos devuelve booleano (true- false)

//mayor (>) - menor (<) | mayor igual (>=) - menor igual (<=)                    picoparéntesis(buscar en el break)

//para que sea correcto -> numeros
//si no tiene el igual no contempla cuando son el mismo numero 

50 < 20 //true
let letrasNombre1="Carla";
let letrasNombre2="Cesar";


//                      5         >=     5
letrasNombre1.length >= letrasNombre2.length;// false

//length -> largo ; herramienta que nos da JS para saber el largo de algo
//en strings nos devuelve la cantidad de caracteres que tiene
//dato.legth

letrasNombre2.length;

// doble igual (==) -> comparando el valor ( no se fija en el tipo de dato)
let numero2= "25";

//numero2=25; //cambio el contenido de la variable a 25;

//             "25" == 25
//console.log(numero2 == 25 );//comparando si el valor de la variable es igual a 25

"hola" == "Hola"//false -> por que una esta escrita con la primer letra en mayuscula y la otra no

let usuarioAdministrador="Admin1";//imaginamos que este valor lo ingresa el usuario

usuarioAdministrador == "Admin1" ;// true

// triple igual (===) -> comparar el tipo de dato y su valor


//            "25"  === 25

// VALOR       25  === 25  -> true
// TIPO     string === number -> false
//console.log(numero2 === 25 ); //false

let falso= false;

// console.log(falso === true);





//distino ( != ; !==) !(no) 

console.log(numero2 != 110)// true -> comparar si numero2 es distinta 110

// ejemplo:
let usuarioRegistrado=true

usuarioRegistrado !== true // true 
// verifico si es un usuario registrado para dejarlo o no ingresar .


//ejemplo 
let carrito =3;
//nuevo valor de carrito es lo que ya teniamos menos 1
carrito = carrito -1;
carrito = carrito -1;
console.log(carrito)

carrito != 0;//usamos el operador de comparacion para que con este operador luego programe que no deje restar mas productos

//null undefined

let claveAntigua="JuanitoCapo1"

let claveNueva="Pepe123"

claveNueva !== claveAntigua

//---------------------------------------

//Logicos 

//AND 'y' && -> todas operaciones me den true, es decir que se cumplan, para que me de de resultado 'true'

let numero3=123;

//              true    &&       true
//console.log(numero3 >4 && numero3 === 123);//true

//              false    &&         true
//console.log(numero3 < 20 && numero3 === 123);//false


//ejemplo usuario y contraseña

let usuarioRegistrado1="JuanPerez";

let passwordRegistrada="Usuario123";

//datos que nos da el usuario
let usuarioIngresado="JuanPerez";
let passwordIngresada="Usuario1";

//para que pueda ingresar : el usuario y la constraseña que ingrese tiene que ser la misma

//                          true                    Y               false
console.log(usuarioIngresado === usuarioRegistrado1 && passwordIngresada === passwordRegistrada);


numero2 >20 && numero/2 <10 && numero+4 ==20 //false


//OR -> "o" ||  -> con que una de las operaciones se cumpla, ya nos devuelve 'true'

numero2 > 200 || numero2 != 0


//ejemplo : entradas a una pelicula 

let edadUsuario = 14;
let chaperon = true;

edadUsuario >=16; // operacion para ver si podemos o no vender la entrada

chaperon === true;

//                false      o       true
 //            14      >=16  o   true  ===   true           
console.log(edadUsuario >=16 || chaperon === true) //true


let valor='bla';
//NOT (!) -> "no" -> me da el opuesto al resultado del operador | siempre que no se cumpla la operacion me va a dar true

console.log(!(valor == undefined))

//     valor !== undefined 

// ejemplo : si el usuario no esta registrado, no lo dejo entrar
let usuarioRegistrado2=true;

//   !           true  -> false
//  !        true        == true
    !(usuarioRegistrado2 == true)

    console.log(!true) //false


// enviado -> true o false
//plazo->30 

!(enviado === true || plazo<30)

enviado!== true


