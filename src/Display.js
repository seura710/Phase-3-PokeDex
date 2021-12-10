// import Toggle from './Toggle';
import './App.css';
import Card from './Card';

function Display() {
  return (
    <div>
      <br/>
      <div className = "title">
      <span className = "spanDex">PokéDex <hr/></span> 
      </div>
      <div className = "Poke-jar">


    <div className = "Poke_card_Display">
        <Card />
      </div>
        </div>
      {/* <Toggle/> */}
    </div>
    
  );
}

export default Display;
