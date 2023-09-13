import './card.css'

export default function Card({nombre,imagen}) {
    return(
        <div className="card bg-success border">
            <img src={imagen} alt="imagen-personaje..."/>
            <h3>{nombre}</h3>
            <button>Know More..</button>
        </div>
    )
}