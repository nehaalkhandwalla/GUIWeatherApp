import React, {useState} from 'react';
import axios from 'axios';

function App() {
//useState is gonna take in 2 values, the first one is the value of the state, the second one is the function that we use to update the state
  const [data, setData] = useState({})
  const [map, setMap] = useState({})

  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b6f23680c3f58e62f3515726f00a367e&units=metric`

  //test change

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        console.log(response);

        setData(response.data);
        console.log(response.data);
      })
    }    
  }

  return (
    <div className="app">
      <div className="search">
        <input type="text" 
        className="search"
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null} 
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          <div className="high-low">
            {data.main ? <p>H:{data.main.temp_min.toFixed()}° L:{data.main.temp_max.toFixed()}°</p> : null}
          </div>
        </div>

        {data.name !=undefined &&
          <div className="middle">
            <div className="feels">
              <p className='heading'>Feels like </p>
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              
            </div>
            <div className="humidity">
              <p className='heading'>Humidity </p>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              <p className='heading'>Wind Speed </p>
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}mph</p> : null}
            </div>
            <div className="pressure">
              <p className='heading'>Pressure </p>
              {data.main ? <p className='bold'>{data.main.pressure}hPa</p> : null}
            </div>
            <div className="visibility">
              <p className='heading'>Visibility </p>
              {data.visibility ? <p className='bold'>{data.visibility/1000}km</p> : null}
            </div>
          </div>
        }

        <div className="bottom">

        </div>

        
      </div>
    </div>
  );
}

export default App;
