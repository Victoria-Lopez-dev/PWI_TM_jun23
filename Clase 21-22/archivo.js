//Destructing y spread operator
let objeto={
    nombre:"Juan",
    edad:20
}

// let nombre=objeto.nombre;
// let edad =objeto.edad;
let{nombre,edad}=objeto
//console.log(nombre,edad)


let dato="bla"

dato="otro valor.."

//spread operator


let lista=[1,2,3,4]

let lista2=[...lista,dato]
console.log({...objeto,item:"bla"})
//setter

//useState() -> [estado,setter()]

// let estado=useState()[0];
// let setter=useState()[1];



