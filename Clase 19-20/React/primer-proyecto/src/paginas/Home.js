import Footer from "../componentes/Footer";
import Navegacion from "../componentes/Navegacion/navegacion";

export default function Home() {
    return(
        <div>
            <Navegacion dato={"hoja Home"} lista={true}/>
            <h1>Soy la hoja de la Home</h1>
            <main>
                <p>un breve texto.....</p>
                <p>un breve texto.....</p>
            </main>
            <Footer/>
        </div>
    )
}