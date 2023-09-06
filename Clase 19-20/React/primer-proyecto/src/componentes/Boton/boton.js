export default function Boton({tituloBoton,colorFondo}) {
    return(
        <button className={"btn w-75 py-5 fs-1 "+ colorFondo}>{tituloBoton}</button>
    )
}