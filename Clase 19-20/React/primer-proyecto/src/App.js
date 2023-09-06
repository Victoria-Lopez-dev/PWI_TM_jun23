//hoja de estilos
import './App.css'

//paquetes - modulos
import React from 'react';

//componentes
import Navegacion from './componentes/Navegacion/navegacion';//importando archvio js
import Footer from './componentes/Footer';//importando el archivo js
import Boton from './componentes/Boton/boton.js'

 function App() {

  let nombre="Hoja de App";
  let lista=["dhajkshd",1231];
  const saludo=()=>{
    console.log("HOLA!")
  }

    return (
      <div>
        <header> 
        <Boton colorFondo={"btn-success"} tituloBoton={"Click!"}/>
          <h1 id='titulo'>Primer titulo</h1>
          <p className="texto">un texto</p>
        </header>
        <Navegacion dato={nombre} lista={lista} unaFuncion={saludo}/>{/* pasando la informacion de nombre al componbente Navegacion */}
        <main>
        <Boton colorFondo={"btn-primary"} tituloBoton={"Pulsar"}/>
          <h2 className="texto">Subtitulo</h2>
          <p className="texto">Un texto breve.......</p>
          <img src='./imagenes/logo192.png' alt="imagen ejemplo"/>{/* en el ruteo de las imagenes en esta parte HTML , accede a la misma partiendo de la carpeta public */}
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </main>  

        <Boton colorFondo={"btn-danger"} tituloBoton={"Aqui!!"}/>

        <Footer/>

      </div>


      );
 }

//utilizando Componenete de clase
// class App extends React.Component{
//   render(){
//     return <h1>Titulo que armamos en el componente App</h1>
//   }
// }

export default App;// permitir que desde otro documento lo puedan importar


//COMPONENTES

// devolver una sola etiqueta
//si quiero que el componente tenga varias etiquetas, me conviene englobarlas con otra,
//div - etiqueta de maquetacion

// en vez del atributo class usamos el atributo className
//para acceder a las imagene parte directamente de la carpeta public ( no necesitamos hacer todo el ruteo hasta esa carpeta)