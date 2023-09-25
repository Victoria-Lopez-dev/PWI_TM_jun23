import {useDispatch} from 'react-redux';
import { agregarTarea } from '../redux/slices/taskSlice'; 
import { useSelector } from 'react-redux';

export default function AgregarTarea(){
    const listaTareas=useSelector((estado)=>estado.tareas);//traemos en este caso la lista para usar su largo como id

    const dispatch=useDispatch();
    //agregar al estado que esta guardado en la store de redux la tarea indicada en el formulario

    const handleTarea=(event)=>{
         event.preventDefault();
         
        const valorInput=event.target.childNodes[1].value;
        const nuevaTarea={
            id:listaTareas.length+1,
            data:valorInput
        }
       
        dispatch(agregarTarea(nuevaTarea))
    }

    return(
        <form onSubmit={(event)=>handleTarea(event)}>
            <label htmlFor="tarea">Nueva tarea:</label>
            <input id="tarea" type="text"/>
            <input type="submit" value="agregar"/>
        </form>
    )
}
