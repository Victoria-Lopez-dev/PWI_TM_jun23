import {Link} from 'react-router-dom';

export default function Nav({itemMenu}) {
    return(
        <nav className="container-fluid bg-success">
        <div className="row">
            <h1 className="col-4">
                <Link to="/" className='text-white text-decoration-none'>RicK &Morty</Link>
            </h1>
            <ul className=" col-8 d-flex gap-5">
                <li><Link to="/characters" className='text-white text-decoration-none'>{itemMenu}</Link></li>
                <li><Link to="/contact" className='text-white text-decoration-none'>Contact</Link></li>
            </ul>        
        </div>

        </nav>
    )}
