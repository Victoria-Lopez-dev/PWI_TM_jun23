import {useState, useEffect} from 'react';

import Nav from '../../components/Nav/navegation'
import Card from '../../components/Card/card'


export default function Character() {
    let [itemMenu]=useState("Characters");
    let [personajes,setPersonajes]=useState([]);
    

    let traerPersonajes=async()=>{
        let dato= await fetch("https://rickandmortyapi.com/api/character")
        .then(resp=>resp.json())
        .catch(err =>console.log("Hubo un error: "+ err));

        return dato
    }

    let guardarPersonajes=async()=>{
        let info =await traerPersonajes();
        //console.log(info)// investigamos que nos trae el llamado a la API
        let listaPersonajes=info.results;//guardamos el array de los personajes

        setPersonajes(listaPersonajes)//cambiamos el estado personajes utilizando su setter
    }

     useEffect(()=>{
        guardarPersonajes();
    },[])



    return(
        <div>
            <Nav  itemMenu={itemMenu}/>
            <section>
                <h2>Filters</h2>
                <p>aca irian los filtros..</p>            
            </section>
    {/*  <button onClick={guardarPersonajes}>Traer Info</button>*/}
            <section>
             {personajes.map((personaje)=>{
                return <Card key={personaje.id} nombre={personaje.name} imagen={personaje.image}/>
             })}
            
        
    
            </section>
        </div>
    )
}