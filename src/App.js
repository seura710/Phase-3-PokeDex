import React from "react";
import { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"
import PokeNavBar from './PokeNavBar';
import AddNew from "./AddNew";
import Display from './Display';


function App(){

  const [pokemonCards, setPokemonCards] = useState([]);
  // const pokeDB = "http://localhost:9292/pokemon";

  useEffect(() => {
    fetch('http://localhost:9292/pokemon')
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
      <main>
      <Switch>
        <Route path='/form'>
        <PokeNavBar/>
          <AddNew pokeDB={'http:/localhost:9292/pokemon'} handleAdd={handleAdd} />
        </Route>
        <Route path='/'>
          <PokeNavBar/>
          <Display pokemonCards={pokemonCards} handlePokeDelete={handlePokeDelete} />
        </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;


