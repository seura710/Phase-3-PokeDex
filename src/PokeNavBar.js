import './App.css'
import Search from './Search'
import { Link } from 'react-router-dom'

function PokeNavBar() {
  return (
    <div className="Navigator">
      <nav>
        <div className=" navContain">
          <Link to='/'>
            <button className="phoneHome">
              <div className="innerCircle" />
              "
              <div className="inCircle" />
            </button>
          </Link>
          <Search className="Search" />
        </div>
        <Link to='/form'>
          <button className="ADDPOKE" aria-label="+ ADD POKEMON">
            + ADD NEW POKEMON
          </button>
        </Link>
      </nav>
    </div>
  )
}

export default PokeNavBar