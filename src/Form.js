import React, {useState} from "react";
import './App.css';
import img from './placepoke.png'

function Form({ pokeDB, handleAdd }) {

const [text, setText] = useState("")

const handleSubmit = (e) => {
  e.preventDefault();

  fetch(pokeDB, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
    }),
  })
    .then((r) => r.json())
    .then((data) => handleAdd(data));
}

  return (
    <div className="form">
      <form onSubmit = {handleSubmit}>
      <div className = "holdImg">
        <img  className = "holdImg" aria-checked  alt = "placePoke" src = {img}/>
         </div>
          <div className ="formHolder">
            <hr className ="vl"/>
            <div className ="formHolder">
      <div className = "fixed"
      >
        <img  className = "imgADDNEW" aria-checked  alt = "placePoke" src = {img}/>
          <div >
            <div className = "block">
            <hr className ="vl"/>
            </div>
         </div >
         <div className ="f.contain">
            <span className="formGreet">YOU FOUND A NEW POKEMON?</span>
              <input placeholder ="Image"onChange ={(e) => setText(e.target.value)} className ="newPokemon"/>
              <input placeholder ="Name" onChange ={(e) => setText(e.target.value)} className ="newPokemon"/>
              <input placeholder = "Type"  onChange ={(e) => setText(e.target.value)} className ="newPokemon" />
              <input placeholder = "Ability" onChange ={(e) => setText(e.target.value)} className ="newPokemon" />
              <span> <input type ="number" placeholder = "Height" className ="nPHW" />
              <input type ="number" placeholder = "Weigth" className ="nPHW"/></span>
              <button className = "addPoke" type="submit">ADD POKEMON</button>
              </div>
              </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
