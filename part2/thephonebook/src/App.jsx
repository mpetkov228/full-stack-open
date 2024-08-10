import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]);
  const [newName, setNewName] = useState('');

  return (
      <div>
        <h2>Phonebook</h2>
        <form>
          <div>
            name: <input />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        {persons.map(person => {
          return <div key={person.id}>{person.name}</div>
        })}
      </div>
  );
};

export default App;