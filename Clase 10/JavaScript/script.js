//codigo JS
//poco tipado y permisivo 

/* Comentarios 
    en multiples
    lineas
*/

//Comentarios de una linea 


//TIPO DE DATOS


//string - caracteres -> comillas: "" ,'' , `` (template literal,bastics,acento frances)  
'Juan'

"Un texto tan largo como quiera....."

console.log(`Admin123` ,'Juan')


//------------------------------------


//number - numeros

1237894512
10.5 // 10 y medio | diez coma cinco

10,2// 10 y 2
console.log(10.5)

NaN //Not a Number -> forma parte del tipo de dato number

console.log(10 -"Hola") //tratando de hacer el calculo matematico


//------------------------------------

//boolean - booleanos -> verdadero y falso 
// true false 

true  /* distinto   "true" -> string*//* 1*/
 false/* 0 */

 console.log(false)

//consola 
//funcion nativa , que ya creo JS -> console.log()

// ejemplo de la importancia del tipo de dato que manejamos
//+ suma o concatenacion

console.log(10+20)//numbers -> suma matematica(calculo)
console.log("10"+"20");//strings -> concateno ,los escribe uno al lado del otro
//           "1020"
//null , undefined 
null 
undefined


//VARIABLES

//variables globales 
//1ro crearla - definir una variable

// palabra reservada (pr):var -let -const

//pr nombre= valor;

let edad=0;
//var nombrePersona = "Jose";
const nombrePersona="Marta";
let total='blka';


let edad1=40;

console.log(nombrePersona);
//2do utilizar

//nombre
edad+10;

//cambio el valor de una variable | redefinir una variable

edad=789;
//nombrePersona=true;

console.log(nombrePersona)//ya no es mas "Jose" ahora es true
//si estuviera definida con conts, el contenido de la variable no se puede cambiar