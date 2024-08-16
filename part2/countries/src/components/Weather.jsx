

const Weather = ({ data }) => {
  const convertToC = k => k - 273.15;

  const icons = {
    'Clear': '01n@2x.png',
    'Haze': '02n@2x.png',
    'Clouds': '03n@2x.png',
    'Rain': '10n@2x.png',
    'Thunderstorm': '11n@2x.png',
    'Snow': '13n@2x.png',
    'Mist': '50n@2x.png'
  };

  console.log(data.weather[0].main);
  return (
    <div>
        <h2>Weather in {data.name}</h2>
        <p>temperature {convertToC(data.main.temp).toFixed(2)} Celsius</p>
        <img src={`https://openweathermap.org/img/wn/${icons[data.weather[0].main]}`} />
        <p>wind {data.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;