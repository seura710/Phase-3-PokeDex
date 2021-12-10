import './App.css';

function PokeCard({ name,height,weight,type,ability}) {

  return (
    <div className="card">
    <img src ="http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"alt ="pikachua"/>
    <p className ="cardBody">
    <span>Name:{name}</span> <br/>
    <span>Height:{height}</span> <span>Weight:{weight}</span><br/>
    <span>Type:{type}</span> <span>Ability:{ability}</span>
    <button name = "Delete">X</button>
    </p>
  </div>
  );
}

export default PokeCard;
