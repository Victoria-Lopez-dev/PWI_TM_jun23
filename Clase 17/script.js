let titulo=document.querySelector("h1");
let lista=[1,24,4,5,6,3,1,24]
//ajemplo de asincronia
// titulo.addEventListener('click',()=>{
//     titulo.style.color="red";
// });


//funciones sincronicas 
const funcion=(num1,dato)=>{
    num1+20
    console.log(dato)
};

//promedio

//1ero haga la suma
//2do la divida por la cantidad que sumo

const promedio =(num1,num2)=>{
    let total =num1+num2;
    return total/2
}

console.log(promedio(20,40))

// Callbacks


function cambioDeTexto(info) {
    let texto=document.querySelector("p");

    texto.innerText=info;
}
//                     5    5   cambioDeTexto
function myCalculator(num2,num1,unCallback) {
   //let suma= 5+ 5 
    let suma=num1+num2;

// cambioDeTexto(suma)
    unCallback(suma)
}

myCalculator("nuevo ","texto",cambioDeTexto);


//promedio

const division=(suma,cantDatos)=>{

   console.log (suma/cantDatos)
}

const sumaNumeros=(funcionCallback,array)=>{
    let totalSuma=0;
    for(item of array){
        totalSuma=totalSuma+item
    }

    funcionCallback(totalSuma,array.length);
    
   // division(totalSuma,array.length)
}

sumaNumeros(division,lista)

//--------------

const sumaNum=(array)=>{
    let totalSuma=0;
    for(item of array){
        totalSuma=totalSuma+item
    }
    return totalSuma
}

const promedioNum=(total,cant)=>{
    return total/cant
}

let resultado=setTimeout(()=> {sumaNum(lista)},200000);//forzamos que tarde en ejecutar la funcion
console.log(promedioNum(resultado,8));



//---------
//setTimeout() -> que una funcion ocurra despues de un tiempo

//que ejecute sumaNum despues de 12seg

const funcion3=()=>{
    titulo.style.color="red";
};

// const addEventListener=(evento,funcionCallback)=>{
//     //las acciones que permiten identificar cuando inicia y finaliza la accion del evento
//     funcionCallback()
// }


// titulo.addEventListener('click',funcion3);

// titulo.addEventListener('click',()=>{
//     titulo.style.color="red";
// });

// Asincronia
//callaback -> las funciones que ejecutamos despues de otras en orden(que espera a que finalize una accion para continuar con la siguiente)

//promesas -> (espero a que termine una ejecucion para continuar con la siguiente)
/*
una intencion a que se cumpla , pero manejamos la situacion en caso que no se cumpla.
dos metodos :
 .then() -> contiene la accion a realizar luego de terminar de ejecutar satisfactoriamente la promesa.
 podemos tener cuantos then necesitemos,los va a ejecutar uno despues del otro (espera a que termine la funcion del anterior then para seguir con el siguiente)

 .catch() -> contene la accion a realizar luego de terminar de ejecutar sin exito la promesa(si ocurrio algun error)


 */
let data;


 //estructura de la promesa
/*
 promesa
    .then((respuesta)=>{data = respuesta})//1ero

    .catch((error)=>console.log("no se pudo cumplir la promesa"+error));

 //   let promesa = new Promise()
 
/*
 fetch("patecion")//usualmente la peticion es la que dice que busque algo de informacion en ese sitio
 .then((data)=>console.log(data))
 .catch((error)=>console.log(error))
 */
//la promesa siempre me devuelve la respuesta o el error

 //API -> Aplication Programing Interface 

 //buscar la informacion de los personajes de ricky y morty


 fetch("https://rickandmortyapi.com/api/character")
 .then((response)=>{response.json()})
 .then((data)=>console.log(data))
 .catch((err)=>{console.log(err)})


 //Conclucion

 /*
 funciones : asincronas y sincronas

 sincronas -> pasan todas seguidas sin esperar 
 asincronas -> hacemos  que espere que termine una funcion para seguir con la siguiente.
 para hacerlas asincronas a las funciones:

 -callbacks(paso la siguiente funcion como parametro)
 -promesas(then, catch)
 -async/await

 JSON -> JavaScript Object Notatio -> formato que se usa para el envio de informacion |String
 JSON -> metodos:
 JSON.stringify(dato) para pasar a JSON alguna informacion (array|objetos)
 JSON.parse(datoJSON) para pasar a array|objeto el JSON recivido

 informacion.json() -> trata a "informacion" como si fuera un JSON y lo transforma a array|objeto
*/


   