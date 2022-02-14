import "./App.css";
import { useState, useEffect } from "react";
import Card from "./Card";

function Display({ pokemonCards, handlePokeDelete,isRed,setisRed  }) {


function colorSwitch() {
    setisRed((isRed) => !isRed);
}



  return (
    <div>
      <br />
      <div className="title">
        <span className="spanDex">
          PokéDex <hr />
        </span>
      </div>
      <div className="Poke-jar"></div>
      <div className="Poke_card_Display">
        <Card pokemonCards={pokemonCards} />
      </div>
      <button className="toggle" onClick={colorSwitch}>
                        {isRed ? "   " : "  "}
                        </button>
    </div>
  );
}

export default Display;
