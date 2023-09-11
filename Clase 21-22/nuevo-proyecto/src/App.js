import './App.css';

import Nav from './components/Navegacion';

function App() {
  const nombre="ANA";

  return (
    <div>
      <Nav nombrePersona={nombre} item2={"otro item"}/>
      <h1>Soy un titulo</h1>
      <p>{nombre}</p>
      <button >Click App</button>
      <img src='/images/ejemplo-logo.png'/>{/* parte de que los archivos estaticos(entre ellos las imagenes) estan en la carpeta public */}
    </div>
    
  );
}
//props ? -> propiedades padre-hijo | objeto con todas las propiedades del componente

//{nombrePersona,item2}=props





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
