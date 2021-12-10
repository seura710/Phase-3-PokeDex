import AddNew from './AddNew';
import './App.css';
import Search from './Search';
import {Link} from "react-router-dom"
import App from './App'


function Navigator() {
  
  // const [pokemonDex, setPokemonDex] = useState([])

  // useEffect(() => {
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(pokemonData => setPokemonDex(pokemonData))
  // }, [])
  
  // function handleSearch(inputSearch) {
  //   const searchResults = pokemonDex.filter(pokeCard => pokeCard.description.toLowerCase().includes(inputSearch.toLowerCase()))
  //   return (setSearchRes(searchResults))
  // }

  return (
    <div className="Navigator">
      <div className = " navContain">
      <Link to='/App'>
        <button className = "phoneHome">
          <div className = "innerCircle"/>
          ""
          <div className = "inCircle"/>
        </button>
      </Link>
       <Search  className = "Search"/>
       {/* <Search handleSearch = {handleSearch} className = "Search"/> */}
      </div>  
      <Link to='/AddNew'>
        <button className= "ADDPOKE" aria-label = "+ ADD POKEMON">
        + ADD NEW POKEMON
        </button>
      </Link>
        {/* <AddNew /> */}
    </div>

  );
}

export default Navigator;