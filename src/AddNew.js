import './App.css';
import Form from './Form';


export default function AddNew({ pokeDB, handleAdd }) {
  return (
  <div>
    <div>
      <Form pokeDB={pokeDB} handleAdd={handleAdd}/>
    </div>
  </div>
  );
}


