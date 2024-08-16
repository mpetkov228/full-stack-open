const Countries = ({ countries, onShowClick }) => {
    return (
        <div>
            {countries.length > 10 
            ? <div>Too many matches, specify another filter</div> 
            : countries.map(
                c => <div key={c.cca2}>
                        {c.name.common} <button onClick={() => onShowClick(c.cca2)}>show</button>
                     </div>
            )}
        </div>
    );
};

export default Countries;