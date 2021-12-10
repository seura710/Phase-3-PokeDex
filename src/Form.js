import './App.css';
import img from './placepoke.png'

function Form() {



  return (
    <div className="form">
      <form >
      <div className = "holdImg">
        <img  className = "holdImg" aria-checked  alt = "placePoke" src = {img}/>
         </div>
          <div className ="formHolder">
            <hr className ="vl"/>
            <div className ="formHolder">
            <span className="formGreet">YOU FOUND A NEW POKEMON?</span>
              <input placeholder ="Image"onChange ={(e) => console.log(e.target.value)} className ="newPokemon"/>
              <input placeholder ="Name" onChange ={(e) => console.log(e.target.value)} className ="newPokemon"/>
              <input placeholder = "Type"  onChange ={(e) => console.log(e.target.value)} className ="newPokemon" />
              <input placeholder = "Ability" onChange ={(e) => console.log(e.target.value)} className ="newPokemon" />
              <span> <input type ="number" placeholder = "Height" className ="nPHW" />
              <input type ="number" placeholder = "Weigth" className ="nPHW"/></span>
              <button className = "addPoke">ADD POKEMON</button>
              </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
