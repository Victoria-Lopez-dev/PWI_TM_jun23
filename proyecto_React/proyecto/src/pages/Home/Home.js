import './Home.css';
import{ Link } from'react-router-dom';//traemos este componente del paquete para poder "linkear" a otro componente

export default function Home() {
    return(
        <div className="bg-primary w-75 p-5">
            <h1>Proyect Rick & Morty</h1>
            <h2>Helcome to Rick & Morty Proyect!</h2>
            <p>This proyect was made for practising React and to made a functional website

            In this website you can know information of the characters of this animated series.
            Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
            <h3>Lets go!</h3>
            <Link to="/characters" className='btn btn-danger p-2 me-2'>Charactes</Link>
            <Link to="/contact" className='btn btn-danger p-2 me-2'>Contact</Link>       
         </div>
    )
}