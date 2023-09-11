import './nav.css'
export default function Nav({nombrePersona,item2}) {
  let item3="bla"

  console.log(item2,nombrePersona)
    return (
      <div >
        <ul className="menu">
            <li>{nombrePersona}</li>
            <li>{item2}</li>
            <li>{item3}</li>
        </ul>
        <button>Click Nav</button>
      </div>
      
    );
  }
  