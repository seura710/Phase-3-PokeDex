import AddNew from './AddNew';
import './App.css';
import Search from './Search';

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
        <div className="buttonContainer">
       <button className = "phoneHome"><div className = "innerCircle"/><div className = "inCircle"/></button>
        </div>
       <Search  className = "Search"/>
       {/* <Search handleSearch = {handleSearch} className = "Search"/> */}
      </div>
      <div/>
 <button className= "ADDPOKE" aria-label = "+ ADD POKEMON">+ ADD NEW POKEMON</button>

        {/* <AddNew /> */}
    </div>
  );
}

export default Navigator;
