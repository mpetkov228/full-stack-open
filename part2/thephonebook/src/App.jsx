import { useState, useEffect } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data);
      });
  }, []);

  const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    };

    const found = persons.find((person) => person.name === newPerson.name);
    if (!found) {
      personService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data));
        });
    } else {
      const confirm = window.confirm(`${found.name} is already added to phonebook, replace the old number with a new one?`);
      if (confirm) {
        personService
          .update(found.id, newPerson)
          .then(response => {
            setPersons(persons.map(p => p.id !== found.id ? p : response.data));
          });
      }
    }

    setNewName('');
    setNewNumber('');
  };

  const del = id => {
    const person = persons.find(p => p.id === id);
    const confirm = window.confirm(`Delete ${person.name}?`)
    if (confirm) {
      personService.del(id);
      setPersons(persons.filter(p => p.id !== id));
    }
  };

  const onNameChange = (event) => {
    setNewName(event.target.value);
  };
  const onNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const onSearchChange = (event) => {
    setSearch(event.target.value);
    setShowAll(false);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} onSeachChange={onSearchChange} />
      <h3>Add a new</h3>
      <PersonForm 
        handleSubmit={handleSubmit}
        newName={newName}
        onNameChange={onNameChange}
        newNumber={newNumber}
        onNumberChange={onNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} deletePerson={del} />
    </div>
  );
};

export default App;