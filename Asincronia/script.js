//eventos

const mostrarNodo=(nodo)=>{
    console.dir(nodo) //obtenemos directamente el nodo en el que nos encontramos
}

const mostrarNodo2=(evento)=>{
    console.dir(evento.target)//obtenemos informacion del evento y dentro de esta informacion accedemos al elemento(nodo) en el que ocurrio el evento
}

//-------------------------------


//Asincrona 

//callbacks
const saludo =()=>{
    console.log("hola")
}
/* addEventListener*/
let boton=document.querySelector("#boton-this");

boton.addEventListener("click",saludo)

const myDisplayer=(info)=>{
    let texto=document.querySelector("p");
    texto.textContent=info
    return info
}
const  myCalculator=(num1,num2)=>{
    let sum= num1+num2;
    return sum
    //myDisplayer(sum)
}

const  myCalculator2=(num1,num2,unaFuncion)=>{
    let sum= num1+num2;
    
    unaFuncion(sum)
}

//usando asincronia -> con callback
myCalculator2(2,2,myDisplayer)

let numero=5;
//funcion sincronica -> todo en simultaneo
myDisplayer(numero)
/*
const  myCalculator2=(num1,num2,myDisplayer)=>{
    let sum= num1+num2;
    
    myDisplayer(sum) ->ejecucion de una funcion 
}

*/

//--------------------------
//promesas
const buscar =async()=>{

    return await fetch("https://rickandmortyapi.com/api/character")
    .then(data =>data.json()) 
    .catch((err)=> err) 
   
}
/*
const buscarPersonajes=async ()=>{

    let info= await buscar()
       console.log(info)
   }
*/
//callback (evento onclick)

//promesa (busqueda de informacion = fetch)

//async await -> espere a recibir la informacion para hacer cosas con ella

//espera a que regrese la informacion que busco para procesarla (fetch/then/catch)
//espera que termine de procesar la informacion para guardar en una variable y trabajarla (asyn/await)

//espera a que se termine de hacer click en el boton para ejecutar todo lo anterior(evento click -> que es un callback)
const buscarPersonajes=async ()=>{

 let info= await fetch("https://rickandmortyapi.com/api/character")
    .then(data =>data.json()) 
    .catch((err)=> err) 
    console.log(info)

    //cosas que hacemos con la info recibida....

    let personajes=info.results;//me trajo un array

    for(let i=0;i<personajes.length;i++){
        let imagen=document.createElement('img');

    imagen.setAttribute("src",personajes[i].image)

    let body= document.querySelector("body")
    body.appendChild(imagen)
    }
    

    
}



//buscarPersonajes()

//async await
//async va al inicio del a funcion y el await va delante de lo que queremos esperar


