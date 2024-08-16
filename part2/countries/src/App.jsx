import { useState, useEffect } from 'react';
import axios from 'axios';

import Countries from './components/Countries';
import DetailedCountry from "./components/DetailedCountry";
import Weather from './components/Weather';

const api_key = import.meta.env.VITE_SOME_KEY;

const App = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [showCountry, setShowCountry] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const filteredCountries = countries
    .filter(c => c.name.common.toLowerCase().includes(search));

  if (showCountry === null && filteredCountries.length === 1) {
    setShowCountry(filteredCountries[0]);
  }
  
  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data);
      });
  }, []);

  useEffect(() => {
    if (showCountry) {
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${showCountry.capital}&appid=${api_key}`)
      .then(response => {
        setWeatherData(response.data);
      });
    }
  }, [showCountry]);

  const onSearchChange = (event) => {
    setSearch(event.target.value);
    setShowCountry(null);
    setWeatherData(null);
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
                  <Countries countries={filteredCountries} onShowClick={onShowClick} setShow={setShowCountry} />
      }
      {weatherData ? <Weather data={weatherData} /> : null}
    </div>
  );
};

export default App;