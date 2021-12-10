import './App.css';
import img from './placepoke.png'

function Form() {


const handleSubmit = (e) => 
e.preventDefault;



  return (
    <div className="form">

      <form  onSubmit = {handleSubmit} >
   
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
              <input placeholder ="Image"onChange ={(e) => console.log(e.target.value)} className ="newPokemon"/>
              <input placeholder ="Name" onChange ={(e) => console.log(e.target.value)} className ="newPokemon"/>
              <input placeholder = "Type"  onChange ={(e) => console.log(e.target.value)} className ="newPokemon" />
              <input placeholder = "Ability" onChange ={(e) => console.log(e.target.value)} className ="newPokemon" />
              <span> <input type ="number" placeholder = "Height" className ="nPHW" />
              <input type ="number" placeholder = "Weigth" className ="nPHW"/></span>
              <button className = "addPoke">ADD POKEMON</button>
              </div>
              </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
