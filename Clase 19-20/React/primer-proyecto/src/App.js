//hoja de estilos
import './App.css'

//paquetes - modulos
import React from 'react';

//componentes
import Navegacion from './componentes/Navegacion/navegacion';//importando archvio js
import Footer from './componentes/Footer';//importando el archivo js

 function App() {
    return (
      <div>
        <header> 
          <h1 id='titulo'>Primer titulo</h1>
          <p className="texto">un texto</p>
        </header>
        <Navegacion/>
        <main>
          <h2 className="texto">Subtitulo</h2>
          <p className="texto">Un texto breve.......</p>
          <img src='./logo192.png' alt="imagen ejemplo"/>
        </main>  
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