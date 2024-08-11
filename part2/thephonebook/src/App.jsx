import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    };

    const found = persons.find((person) => person.name === newPerson.name);
    if (!found) {
      setPersons(persons.concat(newPerson));
    } else {
      alert(`${newName} is already added to the phonebook`);
    }

    setNewName('');
    setNewNumber('');
  };

  const onNameChange = (event) => {
    setNewName(event.target.value);
  };
  const onNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={handleSubmit}>
          <div>
            name: <input value={newName} onChange={onNameChange} />
          </div>
          <div>
            number: <input value={newNumber} onChange={onNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        {persons.map(person => {
          return <div key={person.name}>{person.name} {person.number}</div>
        })}
      </div>
  );
};

export default App;