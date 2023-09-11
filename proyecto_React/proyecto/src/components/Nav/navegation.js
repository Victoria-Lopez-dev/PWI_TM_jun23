
export default function Nav({itemMenu}) {
    return(
        <nav className="container-fluid">
        <div className="row">
            <h1 className="col-4">RicK &Morty</h1>
            <ul className=" col-8 d-flex gap-5">
                <li><a>{itemMenu}</a></li>
                <li>Contact</li>
            </ul>        
        </div>

        </nav>
    )}
