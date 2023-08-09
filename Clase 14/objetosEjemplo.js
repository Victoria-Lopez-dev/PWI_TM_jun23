let alumno1={
    nombre:'Ana',
    apellido:'Perez',
    edad:45,
    cursosInscripto:["HTML","CSS","Bootstrap"],
    regular:true
};
let alumno2={
    nombre:'Jose',
    apellido:'Gomez',
    edad:55,
    cursosInscripto:["HTML","CSS"],
    regular:false
};
let alumno3={
    nombre:'Marta',
    apellido:'Sanchez',
    edad:20,
    cursosInscripto:["Javascript"],
    regular:true
};

let alumnos=[alumno1,alumno2,alumno3];

// for(let alumno of alumnos){
//     console.log(alumno.edad)

// };

//filter() funcion propia de JS que nos permite filtrar de un array, aquellos que cumplen con una condicion -> me devuelve un array con el resultado del filtro
//array.fn(()=>{})
let resultado=alumnos.filter((alumno)=>{return  alumno.edad >30});

console.log(resultado)

//funcion que me permita agregar un alumno a la lista 
//traducional

function agregarAlumnxs(){
    //le pido la info al usuario
    let valorNombre=prompt("Ingrese dato del nombre")
    let valorApellido=prompt("Ingrese dato del apellido")
    let valorEdad=parseInt(prompt("Ingrese dato del edad"))//lo paso a numero
    let unCurso=prompt("ingrese un curso al que este inscripto,para finalizar ponga 'fin' ")
    let valorCursos=[]


    // valorCurso -> array y me permita agregar varios cursos
    //funcion que le pida una x el nombre del curso y con eso hacer un array

    while(unCurso !=='fin'){
        valorCursos.push(unCurso)
        unCurso=prompt("ingrese otro curso al que este inscripto,para finalizar ponga 'fin' ")
    }

    //le pide si es regular o no
    let valorRegular=prompt("Ingrese dato del si es regular escriba Si , si no lo es NO")
    
    //para cambiar un NO SI a un buuleano
    if(valorRegular === "NO"){
        valorRegular=false
    }else{
        valorRegular=true
    }


    //armo el objeto del alumno
    let nuevoAlumno={
        nombre:valorNombre,
        apellido:valorApellido,
        edad:valorEdad,
        cursosInscripto:valorCursos,
        regular:valorRegular
    }

    //lo cargo a la lista

    alumnos.push(nuevoAlumno)

}

agregarAlumnxs()

