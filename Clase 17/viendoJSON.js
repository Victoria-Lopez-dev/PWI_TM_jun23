//la informacion viaja en formato JSON

//formulario -> recolecta la info enformato JSON

//JSON -> JavaScript Object Notation
//recibimos informacion sobre los alumnos registrados en formato JSON

let alumnos=[
  {
    nombre:"Juan",
    apellido:"Perez"
},
{
    nombre:"Pepe",
    apellido:"Ruiz"
},
{
    nombre:"Ana",
    apellido:"Gomez"
},
];
console.log(alumnos)
//transformar dato  en un JSON ->metodo stringify() que transforma de objeto|array a JSON.
//estructura: JSON.stringify(dato)

const alumnosJSON=JSON.stringify(alumnos)

console.log(alumnosJSON)

// si quiero es transformar la informacion JSON que recibi -> metodo que transforma de JSON a objeto|array 
//estructura JSON.parse(dato)

console.log(JSON.parse(alumnosJSON))


/*
`
{
   item: {
        nombre:"Juan",
        apellido:"Perez"
    },
    item2:{
        nombre:"Pepe",
        apellido:"Ruiz"
    },
   item4: {
        nombre:"Ana",
        apellido:"Gomez"
    }
}
`*/
