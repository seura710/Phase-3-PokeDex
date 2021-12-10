import Toggle from './Toggle';
import './App.css';
import { useState,useEffect } from 'react';
import Card from './Card';

function Display() {

  const [pokemonCards, setPokemonCards] = useState([]);
  const pokeDB = "http://localhost:9292/pokemon";

  useEffect(() => {
    fetch(pokeDB)
      .then((res) => res.json())
      .then((data) => setPokemonCards(data));
  }, []);

  // function handlePokeRelease(deleted) {
  //   const newPokemonCards = pokemonCards.filter((pokeCD) => pokeCD !== deleted);
  //   setPokemonCards(newPokemonCards);
  // }
  // function handleAdd(newPoke) {
  //   console.log("Submit button has been clicked!");
  //   const addPoke = [...pokemonCards, new];
  //   setPokemonCards(addPoke);
  // }

  return (
      <div >
        <br/>
        <div className = "title">
          <div>
            <span className = "spanDex">PokéDex <hr/></span>
          </div>
        </div>
        <div className = "Poke-jar">


      <div className = "Poke_card_Display">
     

          <Card pokemonCards = {pokemonCards}  />
     
        </div>
          </div>
          <button className = "toggle" />
      </div>
      
  );
}

export default Display;
