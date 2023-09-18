import './infocard.css'

export default function InfoCard({status,especie,origen,genero,setShow}) {
    return(
        <div  className="column-info">
            <button className='m-3' onClick={()=>setShow(false)}>
                <i className="bi bi-x-lg"></i>{/* icono extraido de boostrap icon */}
            </button>
            <ul className="list-group">
                <li className="list-group-item">
                    <p>Character Status :</p>
                    <p className='fs-5'>{status}</p>
                </li>
                <li className="list-group-item">
                <p>Specie:</p>
                <p className='fs-5'>{especie}</p></li>
                <li className="list-group-item">
                <p>Origin:</p>
                <p className='fs-5'>{origen}</p></li>
                <li className="list-group-item">
                <p>Gender</p>
                <p className='fs-5'>{genero}</p></li>
            </ul>
        </div>
    )
}