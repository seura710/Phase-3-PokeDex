import './App.css';

// function Search({handleSearch}) {
function Search() {


  // const searching = (e) => { const inputSearch = e.target.value; handleSearch(inputSearch) }
  

  return (
    <div className="search_bar">
      <input  onChange = { (e) => console.log(e.target.value) }  className ="Search" placeholder="Search PokéDex" /> 
    </div>
    
  );
}

  
export default Search;
