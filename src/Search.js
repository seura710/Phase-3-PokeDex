import "./App.css";

// function Search({handleSearch}) {
function Search({ handleSearch }) {
  // const searching = (e) => { const inputSearch = e.target.value; handleSearch(inputSearch) }

  return (
    <div className="search_bar">
      <input
        onChange={handleSearch}
        className="Search"
        placeholder="Search Pokémon..."
      />
    </div>
  );
}

export default Search;
