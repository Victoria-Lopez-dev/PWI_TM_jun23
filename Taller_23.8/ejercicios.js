/* 
Una rana quiere llegar al otro lado del camino. La rana se encuentra actualmente en la posición X y quiere llegar a una posición mayor o igual a Y. La rana siempre salta una distancia fija, D.
Escribir una función que, dados tres enteros X, Y y D, devuelve el número mínimo de saltos desde la posición X a una posición igual o mayor que Y.
Es decir, que la función cuente el número mínimo de saltos que debe realizar la rana para llegar a su objetivo.
Por ejemplo, dado:
X = 10 Y = 85 D = 30
la función debería devolver 3, porque la rana se posicionará de la siguiente manera: después del primer salto, en la posición 10 + 30 = 40
después del segundo salto, en la posición 10 + 30 + 30 = 70
después del tercer salto, en la posición 10 + 30 + 30 + 30 = 100.
*/

//funcion
//condicionl
//if -else
//bucle -> for |while | do while 
//No nos sirven en este caso por que no uso arra|foreach |map |for of 
//variables
//length
//&&

//---
//si queremos crear los datos como variables globales en vez de parametros
// let X=32
// let Y=23
// let D=4

function saltoRana(X,Y,D) {
    
    let Dac= X+D;
    let contador=1; 


    while(Dac < Y){
        Dac=Dac+D ;
        contador++ 
    // contador=contador+1
    };

    return contador
    
}

//alternativa de condicion -> (!(Dac >= Y))

console.log(saltoRana(10,85,30))//2 - 3 algo esta mal!! pero que!!!


//una forma de resolver problemas

// leer el problema
//ver que nos pide
//ver como lo resolveriamos (sin pensar el codigo,pensando el proceso)

//que herramientas usamos en JS 
//escribimos codigo
//lo probamos

//otra forma de resolver problemas

// leer el problema
//ver que nos pide

//desglozar lo que nos pide en problemas mas pequeños (modularizacion del problema)

//ir resolviendo de a partes

/*
X => 10
Y => 85
D => 30
*/

const prueba = (X , Y , D) => {

    const distanciaArecorrer = Y - X ; // CALCULO LA DISTANCIA A RECCORER
    let saltos = (distanciaArecorrer / D) ; // DIVIDO LA CANTIDAD DE SALTOS (si el resultado da con coma significa que no tiene resto 0)

    // VERIFICO QUE EL RESTO DE SALTOS SEA 0 , SI NO ES 0 SE LE AGREGA 1 A SALTOS
    if (distanciaArecorrer % D !== 0) {
        saltos = saltos  + 1
    }

    // PASO EL NUMERO A STRING , LUEGO APLICO SPLIT() PARA PODER RETORNAR EL PRIMER NUMERO Y DESCARTAR LO QUE SIGUE DEL PUNTO
   
    const cantSaltos = saltos.toString().split(".")[0]
    //                  3.5      "3.5"      ["3","5"]
    //const cantSaltos = saltos.toString().split(".").shif()
 
    //RETORNO LOS SALTOS
    return cantSaltos //string

    //otra alternativa
    // const cantSaltos=Math.floor(saltos)

}

//                 X  Y  D
console.log(prueba(10,30,20))

//array -> push() pop() splice(1,2) 
//split() -> metodo que toma un string y nos devuelve un array
//separa a los items teniendo en cuenta lo que ponemos entre parentesis 

let frase="hola-don pepe";
console.log(frase.split("-"));
let numero=2.7;


/*
2 -Hacer una funcion que permita saber si el nombre de un pais se encuentra en la lista de paises que pasamos a continuacion.
E en caso que se encuentre dicho nombre, devolver un alert que diga “Pais ya registrado, se elimina del registro” y sacarlo de la lista; caso contrario devolver un alert que indique “Pais registrado” y agregar dicho país a la lista.
*/

const paises=["Argentina","Bolivia","Chile"]

//Sole
/*
const buscarpais=()=>{
    let buscar=prompt("Ingrese el nombre de un pais");

    let resultado=paises.find((item)=>{return item === buscar});
    //undefined (no lo encuentra en la lista), valor(si lo encuentra en la lista)
    
    
    if(resultado === undefined){//no esta en la lista
        alert("Pais registrado");
        paises.push(buscar)//agregamos al pais no registrado
    }else{
        alert("Pais ya registrado, se elimina del registro");
       // paises.pop()saca el ultimo
        //buscamos el indice del pais encontrado
        let indicePais=paises.indexOf(resultado);

        //sacamos ese item de la lista (en donde sea que este ubicado)
        paises.splice(indicePais,1)
    }

};

buscarpais();

console.log(paises);*/

//array.indexOf(item) -> metodo de JS que nos devuelve el indice del item en la lista


//Santi

/* let pais = prompt("Ingrese el pais que desea saber si esta registrado:");
let indicePaisRegistrado;
paises.forEach(element => {
    if (pais == element) {
        alert("Pais registrado, se eliminara del registro");
        indicePaisRegistrado=paises.indexOf(pais);
        
    } 
});

if(indicePaisRegistrado!== null){
        paises.splice(indicePaisRegistrado,1);
        console.log(paises);
}else {
        alert("Pais registrado, agregando...");
        paises.push(pais);
        console.log(paises);
}
*/

//con un for

//const paises=["Argentina","Bolivia","Chile"];
const buscarPais=()=>{
    let pais = prompt("Ingrese el pais que desea saber si esta registrado:");
    let yaRegistrado=false;

    for (let i = 0; i < paises.length; i++) {
        if(paises[i].toUpperCase() == pais.toUpperCase()){
            alert("Pais registrado, se eliminara del registro");
            paises.splice(i,1);
            yaRegistrado =true;
        }
        
    }
    if(yaRegistrado === false){
        alert("Pais registrado, agregando...");
        paises.push(pais);
        
    }
    console.log(paises);
}
buscarPais()

// idea de Francisco para que no importe si el usuario escribe en minuscula o mayuscula, tome siempre la misma forma de escritura ( en este caso en minuscula)
//toLowerCase() toUpperCase() -> lo pase todo a minuscula o a mayuscula respectivamente;

// if(paises[i].toUpperCase() == pais.toUpperCase()){...