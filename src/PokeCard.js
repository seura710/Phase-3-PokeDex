import './App.css';

function PokeCard({ handlePokeDelete, img,name,height,weight,type,ability}) {

  return (
    <div className="card">
    <img src ={img} alt ="pikachua"/>
    <p className ="cardBody">
    <span>Name:{name}</span> <br/>
    <span>Height:{height}m</span> <span>Weight:{weight}kg</span><br/>
    <span>Type:{type}</span> <span>Ability:{ability}</span>
    <br/>
    <button  className = "Delete" name = "Delete" onClick = {handlePokeDelete}> X </button>
    </p>
  </div>
  );
}

export default PokeCard;
