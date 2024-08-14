const Countries = ({ countries }) => {
    if (countries.length === 1) {
        const country = countries[0];

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
    }

    return (
        <div>
            {countries.length > 10 
            ? <div>Too many matches, specify another filter</div> 
            : countries.map(c => <div key={c.cca2}>{c.name.common}</div>)}
        </div>
    );
};

export default Countries;