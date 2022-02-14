import './App.css';
import { useState,useEffect } from 'react';
import Card from './Card';

function Display({pokemonCards,handlePokeDelete}) {



  return (
    <><div>
      <br />
      <div className="title">
        <span className="spanDex">PokéDex <hr /></span>
      </div>
      <div className="Poke-jar"></div>

      <div className="Poke_card_Display">


        <Card pokemonCards={pokemonCards} />

      </div>
    </div><button className="toggle" /></>
      
    
  );
}

export default Display;
