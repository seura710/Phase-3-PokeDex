// import Toggle from './Toggle';
import './App.css';
import { useState,useEffect } from 'react';
import Card from './Card';
import Form from './Form';

function Display() {

  const [pokemonCards, setPokemonCards] = useState([]);
  const pokeDB = "http://localhost:9292/pokemon";

  useEffect(() => {
    fetch(pokeDB)
      .then((res) => res.json())
      .then((data) => setPokemonCards(data));
  }, []);


  return (
    <div>
      <br/>
      <div className = "title">
      <span className = "spanDex">PokéDex <hr/></span> 
      </div>
      <div className = "Poke-jar"></div>

      {/* <div><Form pokeDB={"http://localhost:9292/pokemon"} handleAdd={handleAdd}/>
      </div> */}

      <div className = "Poke_card_Display">
     

          <Card pokemonCards = {pokemonCards}  />
     
        </div>
          </div>
          <button className = "toggle" />
      </div>
      {/* <Toggle/> */}
      
    </div>
    
  );
}

export default Display;
