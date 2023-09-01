//Enunciado

//1 - Agregar utilizando el DOM , la informacion de la segunda tarjeta. Esta misma la encontramos en el segundo objeto de la lista de productos dado a continuacion(es decir el producto "Set cremas dia").

//2 - lograr que al clickear en cada tarjeta, sume 1 producto a la lista de compras y figure en el chango de compra la cantidad de productos agregados a la lista de compra .

/* 3 - hacer que al clickear el boton "Finalizar Compra", tire un alert() con el total a pagar.
Tener en cuenta que a aquellos productos que tienen descuento ( descuento:true), se le debe descontar un 5%
*/

//ADICIONAL!!( es decir si ya pudimos hacer los otros 3 puntos anteriores)

//4 - Hacer que en la lista de compras , aquellos productos con descuento figuren con un color de tipografia verde(el verde que mas les guste).

//5 - hacer funcional el boton de tema dia(boton con un sol), para que al clickearlo , pase a tener una luna ( imagen moon.svg en la carpeta de imagenes); y el body tenga como clase el tema noche (en la hoja de estilos figuran las propiedades como .tema-noche)


const productos=[{
    nombre:"Tonico facial",
    precio:7200,
    descuento:true,
    categoria:"tonicos"
},{
    nombre:"Set cremas dia",
    precio:12300,
    descuento:false,
    categoria:"cuidados"
},{
    nombre:"Set cremas noche",
    precio:14000,
    descuento:false,
    categoria:"cuidados"
}];

console.log(document.querySelector(".tarjeta2").innerHTML)

document.querySelector("#tarjeta2_h3").textContent=productos[1].nombre