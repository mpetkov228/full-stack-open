import { useState, useEffect } from 'react';
import axios from 'axios';

import Countries from './components/Countries';
import DetailedCountry from "./components/DetailedCountry";

const App = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [showCountry, setShowCountry] = useState(null);

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
    setShowCountry(null);
  };

  const onShowClick = id => {
    setShowCountry(countries.find(c => c.cca2 === id));
  };
  
  return (
    <div>
      <div>
        find countries <input value={search} onChange={onSearchChange} />
      </div>
      {showCountry ? 
                  <DetailedCountry country={showCountry} /> : 
                  <Countries countries={filteredCountries} onShowClick={onShowClick} />
      }
    </div>
  );
};

export default App;