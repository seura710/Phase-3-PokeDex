import './App.css';
import Form from './Form';


function AddNew( {pokeDB , handleAdd} ) {
  return (
  <div>
    <div >
      <Form pokeDB={pokeDB} handleAdd={handleAdd}/>
    </div>
  </div>
  );
}

export default AddNew;

