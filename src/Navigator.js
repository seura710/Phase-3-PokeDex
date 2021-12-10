import AddNew from "./AddNew";
import "./App.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import App from "./App";
import { useState, useEffect } from "react";

const URL = "http://localhost:9292/pokemon";

function Navigator() {
  //state for pokemon state
  //state for handle search function in search bar
  const [searchQuery, setSearchQuery] = useState("");
  //handleSearch function
  const handleSearch = (event) => {
    //console log to see the value we type into the search bar
    console.log(event.target.value);
    const searchInput = event.target.value;
    setSearchQuery(searchInput);
  };

  // //FETCH TO API
  // useEffect(() => {
  //   fetch(URL)
  //     .then((r) => r.json())
  //     .then((data) => setTransactions(data));
  // }, []);

  // const filteredPoke = transactions.filter((trans) =>
  //   trans.description.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <div className="Navigator">
      <div className=" navContain">
        <Link to="/App">
          <button className="phoneHome">
            <div className="innerCircle" />
            ""
            <div className="inCircle" />
          </button>
        </Link>
        <Search handleSearch={handleSearch} className="Search" />
        {/* <Search handleSearch = {handleSearch} className = "Search"/> */}
      </div>
      <Link to="/AddNew">
        <button className="ADDPOKE" aria-label="+ ADD POKEMON">
          + ADD NEW POKEMON
        </button>
      </Link>
      {/* <AddNew /> */}
    </div>
  );
}

export default Navigator;
