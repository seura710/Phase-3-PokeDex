import React, {useState} from "react";
import './App.css';
import img from './placepoke.png'

function Form({ pokeDB, handleAdd }) {

const [name, setName] = useState("")
const [height, setHeight] = useState("")
const [weight, setWeight] = useState("")
const [type_id, setType] = useState("")
const [ability_id, setAbility] = useState("")
const [image, setImage] = useState("")

const handleSubmit = (e) => {
  e.preventDefault();

  fetch(pokeDB, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      height: height,
      weight: weight,
      type_id: type_id,
      ability_id: ability_id,
      image: image
    }),
  })
    .then((r) => r.json())
    .then((data) => handleAdd(data));
}

  return (
    <div className="form">
      <form onSubmit = {handleSubmit}>
      <div className = "holdImg">
        <img  className = "holdImg" alt = "placePoke" src = {img}/>
         </div>
          <div className ="formHolder">
            <hr className ="vl"/>
            <div className ="formHolder">
            <span className="formGreet">YOU FOUND A NEW POKEMON?</span>
              <input placeholder ="Image"onChange ={(e) => setImage(e.target.value)} className ="newPokemon"/>
              <input placeholder ="Name" onChange ={(e) => setName(e.target.value)} className ="newPokemon"/>
              <input placeholder = "Type"  onChange ={(e) => setType(e.target.value)} className ="newPokemon" />
              <input placeholder = "Ability" onChange ={(e) => setAbility(e.target.value)} className ="newPokemon" />
              <span> <input type ="number" placeholder = "Height" onChange ={(e) => setHeight(e.target.value)} className ="nPHW" />
              <input type ="number" placeholder = "Weigth" onChange ={(e) => setWeight(e.target.value)} className ="nPHW"/></span>
              <button className = "addPoke" type="submit">ADD POKEMON</button>
              </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
