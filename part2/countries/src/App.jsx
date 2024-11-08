import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
      .then(res => setCountry({
        found: true,
        data: {
          name: res.data.name.common,
          capital: res.data.capital,
          population: res.data.population,
          flag: res.data.flags.svg
        }
      }))
      .catch(err => setCountry({
        found: false
      }));
     
  }, [name])
  
  return country
}

const Country = ({ country }) => {
  if (!country) {
    return null
  }

  if (!country.found) {
    return (
      <div>
        not found...
      </div>
    )
  }

  return (
    <div>
      <h3>{country.data.name} </h3>
      <div>capital {country.data.capital} </div>
      <div>population {country.data.population}</div> 
      <img src={country.data.flag} height='100' alt={`flag of ${country.data.name}`}/>  
    </div>
  )
}

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App;














// import { useState, useEffect } from 'react';
// import axios from 'axios';

// import Countries from './components/Countries';
// import DetailedCountry from "./components/DetailedCountry";
// import Weather from './components/Weather';

// const api_key = import.meta.env.VITE_SOME_KEY;

// const App = () => {
//   const [search, setSearch] = useState('');
//   const [countries, setCountries] = useState([]);
//   const [showCountry, setShowCountry] = useState(null);
//   const [weatherData, setWeatherData] = useState(null);

//   const filteredCountries = countries
//     .filter(c => c.name.common.toLowerCase().includes(search));

//   if (showCountry === null && filteredCountries.length === 1) {
//     setShowCountry(filteredCountries[0]);
//   }
  
//   useEffect(() => {
//     axios
//       .get('https://studies.cs.helsinki.fi/restcountries/api/all')
//       .then(response => {
//         setCountries(response.data);
//       });
//   }, []);

//   useEffect(() => {
//     if (showCountry) {
//       axios
//       .get(`https://api.openweathermap.org/data/2.5/weather?q=${showCountry.capital}&appid=${api_key}`)
//       .then(response => {
//         setWeatherData(response.data);
//       });
//     }
//   }, [showCountry]);

//   const onSearchChange = (event) => {
//     setSearch(event.target.value);
//     setShowCountry(null);
//     setWeatherData(null);
//   };

//   const onShowClick = id => {
//     setShowCountry(countries.find(c => c.cca2 === id));
//   };
  
//   return (
//     <div>
//       <div>
//         find countries <input value={search} onChange={onSearchChange} />
//       </div>
//       {showCountry ? 
//                   <DetailedCountry country={showCountry} /> : 
//                   <Countries countries={filteredCountries} onShowClick={onShowClick} setShow={setShowCountry} />
//       }
//       {weatherData ? <Weather data={weatherData} /> : null}
//     </div>
//   );
// };

// export default App;