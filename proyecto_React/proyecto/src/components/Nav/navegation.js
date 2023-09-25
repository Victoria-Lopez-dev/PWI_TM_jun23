import {Link} from 'react-router-dom';
import './nav.css'

export default function Nav({itemMenu}) {
    return(
        <nav className="container-fluid bg-success">
        <div className="row">
            <h1 className="col-4">
                <Link to="/" className='text-white text-decoration-none'>RicK & Morty</Link>
            </h1>
            
                <ul className=" col-8 d-flex gap-5 ">
                        <li>
                            <Link to="/characters" className={itemMenu ==="Characters"?' btn pepe text-white text-decoration-none':'btn text-white text-decoration-none'}>Characters</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={'btn text-white text-decoration-none'+ (itemMenu === "Contact"?" pepe":"")}>Contact</Link>
                        </li>
                    </ul>               
          
        
        </div>

        </nav>
    )}
