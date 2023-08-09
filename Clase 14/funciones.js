//Funciones

//ORDEN:
//Variables globales
//definicion de funciones
//ejecucion de funciones

//Definicion | crear una funcion 

//tradicional
/*
function nombre(parametros){
    //acciones - instrucciones
}
function nombre(){
    //acciones - instrucciones
}
*/
let lista=[]
function agregar(){
    lista.push("hola")
}
function sumar(num1,num2){
    //acciones ...
    return num1+num2
}
//invocarla |ejecutarla 

console.log(sumar(40,50));
sumar("hola"," jose");
console.log(agregar());
agregar();


//funcion flecha -> arrow function
/*
const nombre=(parametos)=>{
    //acciones - instrucciones
}

*/
let agregarBis= ()=>{
    lista.push("hola")
};

const sumarBis= (num1,num2)=>{
    return num1+num2
};


agregarBis()
sumarBis(40,50)

//funciones nativas - bucles nativos forEach - map - filter -  find
//array.funcion(()=>{})
//-------------------------------------
let numeros=[456,78,123,7,45];

numeros.forEach((numero)=>{

    console.log(numero)
});
let resultado2=numeros.map((numero)=>{ 
    return numero+3
})
console.log(resultado2)
// relacion con un for of 
// const mostrar=(dato,dato2)=>{
//     console.log(dato+dato2)
// }

// for(let numero of numeros){
//     mostrar(numero,2)
// }

//buscar /filtrar 

let resultado3=numeros.filter((numero)=>{

   return numero<50
});//me devuelve un array con aquellos items que cumplen la condicion

console.log(resultado3)

let alumnos=["marta","juan","ana gomez"];



//me devuelve el primer elemento que cumple con esa condicion
const buscarPersona=()=>{
    let alumnoAbuscar=prompt("ingrese el alumno a buscar");
    let resultado=alumnos.find((persona)=>{return persona === alumnoAbuscar})

    //resultado -> undefined o a la persona

    if(resultado === undefined){
        alert("esa persona no se encuentra en la lista")
    }else{
        alert(resultado +" esta inscripta..")
    }
}