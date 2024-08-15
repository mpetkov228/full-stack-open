const DetailedCountry = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
        <div>capital {country.capital.join(', ')}</div>
        <div>area {country.area}</div>
        <h3>languages:</h3>
        <ul>
          {Object.values(country.languages).map(l => <li key={l}>{l}</li>)}
        </ul>
        <img src={country.flags.png} />
    </div>
  );
};

export default DetailedCountry;