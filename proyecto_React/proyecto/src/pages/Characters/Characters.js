import './characters.css'

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


//evento onChange de los checkbox para ver si tengo que agregar o sacar de la lista de filtros a aplicar a algun filtro
    let aplicarFiltros=(event)=>{
        let nombreCheckbox=event.target.id;

        if(event.target.checked === true){
            console.log("Aplicar filtro")
            setFiltrosAplicados([...filtrosAplicados,nombreCheckbox]);
            //console.log(personajes)
        }else{
            console.log("sacar filtro")
            let filtrosRestantes=filtrosAplicados.filter((el)=>el !== nombreCheckbox);
            setPersonajes(listaCompleta);//para que agregue los personajes que no tenia por el filtro
            setFiltrosAplicados(filtrosRestantes)
    
        }    
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

    // uso un useEffect para que aplique los filtros cada vez que vea que se modifica la lista de filtros a aplicar
    useEffect( ()=>{
        //console.log(filtrosAplicados)
      filtrosAplicados.forEach((filtroNombre)=>{
            let resultado;
            if(filtroNombre === "Alive" || filtroNombre === "Dead"){
                    resultado=personajes.filter((personaje)=> personaje.status === filtroNombre)
                }
                if(filtroNombre === "Female" || filtroNombre === "Male"){
                    resultado=personajes.filter((personaje)=> personaje.gender === filtroNombre)
                }
                if(filtroNombre === "unknown"){
                    resultado=personajes.filter((personaje)=> personaje.origin.name === filtroNombre)
                    
                }
                setPersonajes(resultado)//nueva lista de personajes a reproducir
        })
       
    },[filtrosAplicados])// la dependencia de "filtrosAplicados"



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
            {/* usamos un operador ternario para que en caso que no encuentre personajes con esos filtros tire el cartel de alerta (es decir que si el array personaje nos da 0 items) */}
                {personajes.length>0?
                    personajes.map((personaje)=>{
                                return <Card key={personaje.id} data={personaje}/>
                    }):
                    <div className="alert  d-flex gap-2" role="alert">
                    <i className="bi bi-exclamation-triangle-fill fs-5"></i>{/* icono de alerta */}
                    <p className='m-0'>Sorry! There are no characters width all those properties</p>
                    </div>
                }

            
    
            </section>
        </Fragment>
    )
}
//operador ternario (condicional)->estructura :  condicion? si se cumple:si no se cumple;