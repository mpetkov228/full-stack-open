import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
    };

    const found = persons.find((person) => person.name === newPerson.name);
    if (!found) {
      setPersons(persons.concat(newPerson));
    } else {
      alert(`${newName} is already added to the phonebook`);
    }
    
    setNewName('');
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={handleSubmit}>
          <div>
            name: <input value={newName} onChange={handleChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        {persons.map(person => {
          return <div key={person.name}>{person.name}</div>
        })}
      </div>
  );
};

export default App;