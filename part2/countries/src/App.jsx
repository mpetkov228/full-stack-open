import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries';

const App = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  const filteredCountries = countries
    .filter(c => c.name.common.toLowerCase().includes(search));
  
  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };
  
  return (
    <div>
      <div>
        find countries <input value={search} onChange={onSearchChange} />
      </div>
      <Countries countries={filteredCountries} />
    </div>
  );
};

export default App;