import React from "react";
import { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"
import Navigator from './Navigator';
import AddNew from "./AddNew";
import Display from './Display';


function App() {

  const [pokemonCards, setPokemonCards] = useState([]);
  const pokeDB = "http://localhost:9292/pokemon";

  useEffect(() => {
    fetch(pokeDB)
      .then((res) => res.json())
      .then((data) => setPokemonCards(data));
  }, []);

  function handlePokeDelete(deleted) {
    console.log("Delete button has been clicked!")
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
      <Switch>
        <Route  path='/'>
        <Navigator />
          <Display pokemonCards={pokemonCards} handlePokeDelete={handlePokeDelete} />
        </Route>
        <Route exact path='/addnew'>
          <Navigator />
          <AddNew pokeDB={pokeDB} handleAdd={handleAdd} />
        </Route>
      </Switch>
      <div className="container"></div>
      <div className="global"></div>
    </div>
  );
}

export default App;