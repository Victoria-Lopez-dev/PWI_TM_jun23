import './App.css';
import {useState} from 'react';

import Nav from './components/Navegacion';

function App() {
  //genero un estado que se llama nombre junto a su setter por medio del destructing
  //al utilizar el metodo useState() le digo cual es el valor de su estado inicial y como se va a llamar la funcion setter(la funcion que me permite modificar el estado)
  //const nombre = "Ana"

  //nombre="juan"
  const [nombre,setNombre]=useState("Ana");
  const[lista,setLista]=useState([1,2,3]);


  //funcion que se ejecuta en este caso en el evento click
  const cambiarNombre=()=>{
   //cambiamos el estado nombre con su funcion setter //
    setNombre("Juan")

    //lista.push("Hola")
    console.log(lista)
    setLista([...lista,"Hola"])//como agregar con un spread operator y el setter, items a una lista
  };


  return (
    <div>
      <Nav nombrePersona={nombre} item2={"otro item"} setNombre={setNombre}/>
      <h1>Soy un titulo</h1>
      <p>{nombre}</p>
      <button onClick={cambiarNombre}>Click App</button>
      <img src='/images/ejemplo-logo.png' alt=""/>{/* parte de que los archivos estaticos(entre ellos las imagenes) estan en la carpeta public */}
    </div>
    
  );
}
//props ? -> propiedades padre-hijo | objeto con todas las propiedades del componente

//{nombrePersona,item2}=props


//Para los eventos usamos camelcase en React
//onclick -> onClick
//onmouseover -> onMouseOver








//------ si lo hacemos con componentes de clase

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       nombre:"Ana"
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.nombre}</h1>
//         <button onClick={()=>this.setState({nombre:"Juan"})}>Click</button>
//       </div>
//       )
//   }
// }
export default App;
