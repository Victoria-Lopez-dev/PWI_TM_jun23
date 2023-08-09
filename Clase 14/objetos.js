//programa para sitio de ropa

let stock=[40,100,25];

//objetos

/*
{
    propiedad:valor,
    propiedad:valor,
    propiedad:valor
}

*/
let remeras={
    talles:[{size:"X",cantidad:10},"M","XL"],
    stock:20,
    descuento:false,
    colorDisponible:["rojo",'azul']
};
console.log(remeras)

//antes se usaba para llamar a una propiedad
//objeto["propiedad"]
//para ver un valor de un objeto
//objeto.propiedad -> valor

console.log(remeras.descuento)

//modificar el valor de una propiedad

remeras.stock=40

//agerar una nueva propiedad

remeras.material="algodon"

//eliminar una propiedad

delete remeras.colorDisponible