import { useSelector } from 'react-redux';
import './App.css';
import AgregarTarea from './components/AgregarTarea'


function App() {
  const listaTareas=useSelector((estado)=>estado.tareas);//traer la informacion del estado guardada con redux

  console.log(listaTareas)
  return (
    <div className="App">
    <h1>Hola Mundo!!</h1>
      <AgregarTarea/>
      
    <h2>Tareas:</h2>
      <ul>
        {listaTareas.map((tarea)=>{
          return <li key={tarea.id}>{tarea.data}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
