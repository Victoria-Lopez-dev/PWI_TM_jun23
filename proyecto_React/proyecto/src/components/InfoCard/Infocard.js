
export default function InfoCard({status,especie,origen,genero,setShow}) {
    return(
        <div >
            <button onClick={()=>setShow(false)}>
                <i class="bi bi-x-lg"></i>{/* icono extraido de boostrap icon */}
            </button>
            <ul className="list-group">
                <li className="list-group-item">
                    <h4>Character Status :</h4>
                    <p>{status}</p>
                </li>
                <li className="list-group-item">
                <h4>Specie:</h4>
                <p>{especie}</p></li>
                <li className="list-group-item">
                <h4>Origin:</h4>
                <p>{origen}</p></li>
                <li className="list-group-item">
                <h4>Gender</h4>
                <p>{genero}</p></li>
            </ul>
        </div>
    )
}