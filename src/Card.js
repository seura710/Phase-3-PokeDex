import './App.css';
import PokeCard from './PokeCard';

function Card({pokemonCards}) {
 
  const pokeCardDrawn = pokemonCards.map((pokeMON) => {
    return (
      <PokeCard
        pokeMON={pokeMON}
        key={pokeMON.id}
        img = {pokeMON.image}
        name = {pokeMON.name}
        height = {pokeMON.height}
        weight = {pokeMON.weight}
        type = { pokeMON.type_id}
        ability ={ pokeMON.ability_id}
        // handleTaskDelete={onDeleteTask}
      />

    );
  });


  return (
    <div className ="eigth">
      {pokeCardDrawn} 
    </div>
  );
}

export default Card;
