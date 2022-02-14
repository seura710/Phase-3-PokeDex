import React, { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';
import img from './placepoke.png'

function Form({ handleAdd }) {

  const [name, setName] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [type_id, setType] = useState("")
  const [ability_id, setAbility] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:9292/pokemon', {
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
    <div className='topC'>
    <div className="form">
      <form onSubmit={handleSubmit} >
        <div className="formHolder">
            <img className="imgADDNEW" alt="placePoke" src={img} />
          <div className="fixed">
            <div className="block">

            </div>
            <div className="f-contain">
              <span className="formGreet">YOU FOUND A NEW POKEMON?</span>
              <button id='pkref'><a href='https://pokemondb.net/pokedex'>Poke References</a></button>
              <input placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} className="newPokemon" />
              <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="newPokemon" />
              <input placeholder="Type" value={type_id} onChange={(e) => setType(e.target.value)} className="newPokemon" />
              <input placeholder="Ability" value={ability_id} onChange={(e) => setAbility(e.target.value)} className="newPokemon" />
              <span> <input type="number" value={height} placeholder="Height" onChange={(e) => setHeight(e.target.value)} className="nPHW" />
                <input type="number" placeholder="Weigth" onChange={(e) => setWeight(e.target.value)} className="nPHW" /></span>
              <button className="addPoke">ADD POKEMON</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Form;
