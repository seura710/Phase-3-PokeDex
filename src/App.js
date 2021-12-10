import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import Search from './Search'
import Navigator from "./Navigator";
import AddNew from "./AddNew";
import Display from "./Display";

function App() {
  const [pokemonCards, setPokemonCards] = useState([]);
  const pokeDB = "http://localhost:9292/pokemon";

  useEffect(() => {
    fetch(pokeDB)
      .then((res) => res.json())
      .then((data) => setPokemonCards(data));
  }, []);

  function handlePokeDelete(deleted) {
    console.log("Delete button has been clicked!");
    const newPokemonCards = pokemonCards.filter((poke) => poke !== deleted);
    setPokemonCards(newPokemonCards);
  }

  function handleAdd(newPoke) {
    console.log("Submit button has been clicked!");
    const addPoke = [...pokemonCards, newPoke];
    setPokemonCards(addPoke);
  }

  return (
    <div className="App">
      <Navigator />
      <Switch>
        <Route exact path="/AddNew">
          <AddNew pokeDB={pokeDB} handleAdd={handleAdd} />
        </Route>
        <Display
          pokemonCards={pokemonCards}
          handlePokeDelete={handlePokeDelete}
        />
      </Switch>
      <div className="container"></div>
      <div classname="global"></div>

      {/* <div className = "Poke_field"/>
      </div> */}
    </div>
  );
}

export default App;
