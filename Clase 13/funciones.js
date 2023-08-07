//variables globales
const alumnos=['Juan',"Ana","Dario","Martina","Kevin","Soledad"];

let lista2=[20,40,50];
let saludo="Hola"

//funciones -> conjunto de acciones 

//1- definirlas | crearlas

//tradicional

// function armarTorta(){
//     //conjunto de acciones a realizar
// }

function sumar() {
   20+40
   //alumnos=["bla"]//tira error porque estoy redefiniendo una const
   saludo="Bonjour"//puedo cambiar su valor ya que se definio como 'let'

}

function sumarBis() {
    console.log(100+80)
}
//        sumaGral(30,50)  
function sumaGral(num1,num2){
//( 30 +50)//80
    let suma=num1 + num2;
    return suma
}

function sumaLista(lista){
    let total=0
    for(item of lista){
        total=total+ item
    }
    return total
}

function mostrar(lista){
    let total=0;//variables locales
    for(item of lista){
        console.log(item)
    }
    //console.log(total)
   alert("la lista tiene "+ lista.length + " items")
}

function agregarItem(valor){
    alumnos.push(valor)// al valor ya creado lo estoy modificando, no redefino la variable
    
}
//2 -invoco | ejecuto

// armarTorta()
console.log(sumar())//undefined
console.log(sumarBis())//undefined
console.log(sumaLista(lista2))//110


sumaGral(80," pepe")//'80 pepe'
let resultado=sumaGral(30,50);
sumaGral("Hola"," pepe")

console.log("el promedio es "+ resultado/2)
//mostrar(alumnos)
//console.log(total) -> da error por ser una variable local, que solo vive en la funcion 'mostrar'.
// mostrar(lista2)

agregarItem("Eugenio")

/* orden */
//1- variables globales
//2- definir funciones

//3- ejecucion de funciones

//Para el Miercoles 9/8 :

// - arrow function + repaso de funciones 
// -  dudas de ejercicios
//DOm +Eventos con ejercicios de tarea.

