// let alumnos=[/* lista de alumnos.. */]
// const mandarMensaje={
//     for (alumno of alumnos) {
//         console.log("Mandar manesaje")
//     }
// }

//POO 
//administrador encargado de poder ejecutar la funcion de mandarMensaje

//Programa para una veterinaria

//cargar a los pacientes
//informacion sobre los animales 

let perro1={
    nombre:"Rocky",
    edad:2,
    raza:"mestizo",
    peso:23,
    ladrar:function ladrar(){
        alert("waw!")
    }
}
console.log(perro1.ladrar)
//perro1.ladrar()
console.log(perro1.nombre)

//propiedad -> caracteristicas
//funciones en un objeto -> comportamientos

//POO -> entidades que participan en el programa

//clases - instancia de una clase (objeto)

//veterinaria - perros - gatos -> animales 

//Clases -> moldes de las entidades

class Perro {
    constructor(nombre,edad,peso,raza){
        this.nombrePerro=nombre,
        this.edadPerro=edad,
        this.pesoPerro=peso,
        this.razaPerro=raza
    }
    respirar(){
        console.log("este perro respira")
    }
    comer(){
        console.log("este perro come")
    }
    dormir(){
        console.log("este perro esta durmiendo")
    }
    ladrar(){
        alert("waw!")
    }
}

//instacia de una clase ->objeto a partir de una clase

const perro2= new Perro('Rocky',2,23,"mestizo");
console.log(perro2)

const perro3= new Perro("Firulais",10,8,"maltes");
console.log(perro3)

//perro2.ladrar()
//perro3.comer()

//asistenes del veterinario
let listaAnimales=[];

class Asistente{
    constructor(nombre,edad,correo){
        this.nombre=nombre
        this.edad=edad
        this.correo=correo,
        this.rango="asistente"
    }

    hacerFichaAnimal(animal){
        listaAnimales.push(animal)
    }

    indicarValorAPagar(){
        console.log("Tiene que pagar tanto dinero por la atencion...")
    }

}

const asistenteSemana= new Asistente("Marta",30,"marta@veterinaria.com");
const asistenteFindeSemena= new Asistente("Juan",40,"juan@veterinaria.com");

 asistenteSemana.hacerFichaAnimal(perro1);

 asistenteFindeSemena.hacerFichaAnimal(perro2);

//hacerFichaAnimal(perro3)

