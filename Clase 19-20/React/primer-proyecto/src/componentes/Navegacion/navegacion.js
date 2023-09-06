//estilo
import './navegacion.css'

function Navegacion({dato,lista,unaFuncion}) {
    unaFuncion()
    return(
        <nav>
            <ul className="menu">
                <li>{dato}</li>
                <li>item menu</li>
            </ul>
            
        </nav> 
    )
}

//ejemplo con funcion flecha

// export default Navegacion=()=> {
//     return(
//         <nav>
//             <ul>
//                 <li>item menu</li>
//                 <li>item menu</li>
//             </ul>
//         </nav> 
//     )
// }


export default Navegacion

//destructing

