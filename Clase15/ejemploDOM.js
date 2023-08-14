let alumnos=[
    {
        nombre:"Juan Perez",
        edad:40,
        cursos:["HTML y CSS"]
    },{
        nombre:"Ana Gomez",
        edad:30,
        cursos:["PWI","React"]
    },{
        nombre:"Marta Lopez",
        edad:55,
        cursos:["JS","Bootstrap","HTML y CSS"]
    },{
        nombre:"Otro alumno",
        edad:20,
        cursos:["JS"]
    }
]
let zona_tarjetas=document.querySelector("section");

/* crear una tarjeta por cada alumno y agregarlo a la 'zona tarjetas'*/
//iteramos sobre la lista para crear una tarjeta por cada item de la lista.
for(let alumno of alumnos){
    //crear una tarjeta -> createElement
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("tarjeta");

    //contenido de la tarjeta -> innerHTML
    tarjeta.innerHTML=`
    <h4>${alumno.nombre}</h4>
    <p>${alumno.edad}  años</p>
    <ul>
       ${alumno.cursos.map((curso)=>{ return `<li>${curso}</li>`})}
    </ul>
    `
    //agregar la tarjeta a la 'zona tarjetas' -> appendChild()
    zona_tarjetas.appendChild(tarjeta)
    
}

/*
modelo de cada alumno de la is
{ 
        nombre:"string",
        edad:number,
        cursos:[array de los cursos]
    }*/