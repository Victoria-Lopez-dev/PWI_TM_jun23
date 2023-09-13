import './pagina1.css'

import Nav from '../components/Navegacion';
import Boton from '../components/Boton/Boton';

export default function Pagina1() {
    let alumnos=["Juan",'Pedro',"Marta","Carla","Esteban","Kevin"];
    let itemBotones=[
        {
            id:"1",
            nombre:"boton1",
            claseBtn:"btn1"
        },{
            id:"2",
            nombre:"boton2",
            claseBtn:"btn2"
        },{
            id:"3",
            nombre:"boton3",
            claseBtn:"btn3"
        }
];

    return(
        <div>
         <Nav nombrePersona={"Pepe"} item2={"bla"}/>
            <h1>Pagina 1...</h1>
            <h2>Lista Personas</h2>
            <ul>
               {alumnos.map((alumno)=>{
                return <li key={alumno} className="item">{alumno}</li>
                })}
            </ul>
            <Boton valorBoton={"boton4"}/>
            {itemBotones.map((boton)=>{
                return <Boton key={boton.id} valorBoton={boton.nombre} claseBtn={boton.claseBtn}/>
            })}
           
        </div>
        
    )
}
/* array.map(()=> return )   */

/* useEffect(()=>{},[]) 
hook que se encarga de ejecutar funciones cada vez que se vea modificado lo que este entre parentesis
manejo de ciclo de vida del componente*/