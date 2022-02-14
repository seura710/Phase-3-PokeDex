import { Link } from 'react-router-dom';
import './App.css';
import Form from './Form';


export default function AddNew({ pokeDB, handleAdd }) {
  return (
  <div>
    <div>
      <Form handleAdd={handleAdd}/>

    </div>
  </div>
  );
}


