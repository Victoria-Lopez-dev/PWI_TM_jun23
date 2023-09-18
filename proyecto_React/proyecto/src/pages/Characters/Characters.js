import {useState, useEffect, Fragment} from 'react';

import Nav from '../../components/Nav/navegation'
import Card from '../../components/Card/card'
import Filter from '../../components/Filter/Filter'

export default function Character() {
    let [itemMenu]=useState("Characters");
    let [listaCompleta,setListaCompleta]=useState([]);//lista completa de todos los personajes que trae la API
    let [personajes,setPersonajes]=useState([]);//lista de personajes a reproducir en las tarjetas
    let [filtros]=useState([
        {
            nombre:"Alive",
            filtro:'Character Alive'
        },{  
            nombre:"Dead",
            filtro:'Character Dead'
        },{
            nombre:'Female',
            filtro:'Female'
        },{
            nombre:"Male",
            filtro:'Male'
        },{
            nombre:"unknown",
            filtro:'Origin Unknown'
        }]);
    let[filtrosAplicados,setFiltrosAplicados]=useState([]);


    let traerPersonajes=async()=>{
        let dato= await fetch("https://rickandmortyapi.com/api/character")
        .then(resp=>resp.json())
        .catch(err =>console.log("Hubo un error: "+ err));

        return dato
    }

    // let guardarPersonajes=async()=>{
    //     let info =await traerPersonajes();
    // // console.log(info.results)// //investigamos que nos trae el llamado a la API
    //     let listaPersonajes=info.results;//guardamos el array de los personajes

    //     setPersonajes(listaPersonajes)//cambiamos el estado personajes utilizando su setter
    // }

    let filtrar=(nombreCheckbox)=>{
        if(nombreCheckbox === "Alive" || nombreCheckbox === "Dead"){
                let resultado=personajes.filter((personaje)=> personaje.status === nombreCheckbox)
                setPersonajes(resultado)//nueva lista de personajes a reproducir
            }
            if(nombreCheckbox === "Female" || nombreCheckbox === "Male"){
                let resultado=personajes.filter((personaje)=> personaje.gender === nombreCheckbox)
                setPersonajes(resultado)
            }
            if(nombreCheckbox === "unknown"){
                let resultado=personajes.filter((personaje)=> personaje.origin.name === nombreCheckbox)
                setPersonajes(resultado)
            }
    }

    let aplicarFiltros=(event)=>{
        let nombreCheckbox=event.target.id;

        if(event.target.checked === true){
            console.log("Aplicar filtro")
            setFiltrosAplicados([...filtrosAplicados,nombreCheckbox]);
            //console.log(personajes)
        }else{
            console.log("sacar filtro")
            let filtrosRestantes=filtrosAplicados.filter((el)=>el !== nombreCheckbox)
            setFiltrosAplicados(filtrosRestantes)
            setPersonajes(listaCompleta)

        }    
        console.log(filtrosAplicados)
        filtrosAplicados.forEach((filtro)=>{filtrar(filtro)})
           // console.log(nombreCheckbox)info de que checkbox esta pulsando
           // console.log(event.target.checked) si el checkbox esta checked o no
    }



    useEffect(()=>{
        let guardarPersonajes=async()=>{
            let info =await traerPersonajes();
        // console.log(info.results)// //investigamos que nos trae el llamado a la API
            let listaPersonajes=info.results;//guardamos el array de los personajes

            setPersonajes(listaPersonajes)//cambiamos el estado personajes utilizando su setter
            setListaCompleta(listaPersonajes)
        }
        
        guardarPersonajes();
        
    },[])



    return(
        <Fragment>
            <Nav  itemMenu={itemMenu}/>
            <section>
                <h2>Filters</h2>
               <form className='d-flex gap-5 p-5 '>
                    {filtros.map((item)=>{ return <Filter key={item.nombre} valorFiltro={item.filtro} idFiltro={item.nombre} handlerChange={aplicarFiltros}/>})}
               </form>
            </section>
            {/*  <button onClick={guardarPersonajes}>Traer Info</button>*/}
            <section>
             {personajes.map((personaje)=>{
                return <Card key={personaje.id} data={personaje}/>
             })}
    
            </section>
        </Fragment>
    )
}