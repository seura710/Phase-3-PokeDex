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
         </div>
       <Search  className = "Search"/>
         </div>
    </div>
  );
}

export default Navigator;
