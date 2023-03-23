import React, {useState, useEffect} from 'react';
import axios from 'axios';
import InfoCard from './InfoCard';
import Clothing from './Clothing';
import rainpic from './assets/rain.png'
import temppic from './assets/temp.png'
import windpic from './assets/wind.png'
import Whours from './Whours';
import WWeather from './WWeather';
import WDial from './WDial';
import './index.css';
import Dial from './Dial';
import Wind from './Wind';


function App() {
//useState is gonna take in 2 values, the first one is the value of the state, the second one is the function that we use to update the state
  const [data, setData] = useState({})
  const [moreData, setMoreData] = useState({})
  const [lat, setLat] = useState(20)
  const [lon, setLon] = useState(24)
  const [whours, setwhours] = useState([])
  const [dailyData, setDailyData] = useState([])
  const [condition, setCondition] = useState('')
  const [hours, setHours] = useState([])

   const [windSpeed, setWindSpeed] = useState(0);
  // const []


  const [map, setMap] = useState({})

  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b6f23680c3f58e62f3515726f00a367e&units=metric`
  

  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     const response = await fetch(
  //       "https://api.openweathermap.org/data/2.5/weather?q=Apple&appid=b6f23680c3f58e62f3515726f00a367e"
  //     );
  //     const data = await response.json();
  //     setWindSpeed(data.wind.speed);
  //   };
  //   fetchWeatherData();
  // }, []);

  // const windDirection = windSpeed > 0 ? (windSpeed / Math.abs(windSpeed)) * 180 : 0;

  //test change

  useEffect(() => {
    // console.log('njjnjn')
    // setLat(data.coord.lat)
    // setLon(data.coord.lon)
    getMoreData()
    fetchWeather()
    getMap()

  },[lat, lon])

  
  const fetchWeather = async () => {

    const apiKey = "45ffea8100064f028b9133756220103";
    var inputVal = `${lat},${lon}`
    const dailyApiKey = "2b49036a3236c92ef3bfa333925e4ce3"

    var units = "imperial"



    const dailyUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,current,minutely&units=${units}&appid=${dailyApiKey}`;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${inputVal}&days=150&aqi=no&alerts=no&max_distance=50`;

    //set the daily weather
    var dailyData = []

    const dRes = fetch(dailyUrl).then((dRes) => {
      const dData = dRes.json().then((dData) => {
        dData = dData.daily
        for (let i = 0; i < 8; i++) {
          dailyData.push(dData[i])
        }

        // console.log('MDJBIUYBIYVUTC',setDailyData)
        setDailyData(dailyData)
      })
    });

    //set other weather
    const res = fetch(url).then((res) => {
      const data = res.json().then((data) => {
        const current = new Date();
        const hour = current.getHours();
        const numHours = 12

        // setHours(current.getSeconds())
        setCondition(data.current.condition.text)
        console.log(data)
        console.log(" CONDITION -- ", condition)
        var wHours = data.forecast.forecastday[0].hour.slice(hour)

        if (wHours.length < numHours) {
          for (let i = 0; i < numHours - wHours.length; i++) {
            wHours.push(data.forecast.forecastday[1].hour[i])
          }
        }


        console.log(wHours)
        setwhours(wHours)


      })
    })


  }


  // const clothing = () => {
  //   if (condition == 'Sunny'){
  //     = 'shorts and a t-shirt'

  //   }
  // }

 const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        // console.log(response);

        setData(response.data);
        setLat(response.data.coord.lat)
        setLon(response.data.coord.lon)
        // setLon(response.coord.lon)
        // console.log(response.data);
      }) 

      
  }}

  const getMap = () => {

    // const urlMap = `https://maps.openweathermap.org/maps/2.0/weather/1h/PARAIN/10/3/2?date=1527811200&appid=4e10dff7989998c1e1b37a9f50b9b1e4`
    const urlMap = 'http://history.openweathermap.org/data/2.5/history/city?id=2885679&type=hour&appid=4e10dff7989998c1e1b37a9f50b9b1e4'
    axios.get(urlMap).then((response) => {
      

      setMap(response.data);
      console.log('ewdnowefnoef',response.data);
    })
   
  }

  const getMoreData = () => {
    const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=55bbb0b7a70f89bb6854377795f2b220&units=metric`

    axios.get(url2).then((response) => {


      setMoreData(response.data);
      console.log(response.data);
    })
  }

  


  return (
    // {data.name != undefined &&
    <div className={condition.includes("rain")? "app rain": condition.includes("sun") ? "app sunny" : condition.includes("thunder") ? "app storm" : "app other"}>
     
{/* } */}
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
          {data.name != undefined &&
          <div className="icon">
            {/* {data.weather ? <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt=""/> : null} */}
            {whours[0] ? <img src={whours[0].condition.icon} alt=""/> : null}
          </div>
} {data.name != undefined &&
          <div className="description">
            {/* {data.weather ? <p>{data.weather[0].description}</p> : null} */}
            {whours[0] ? <p>{whours[0].condition.text}</p> : null}
            {/* {whours[0] ? <p>{whours[0].condition.text}</p> : null} */}
          </div>
}
          <div className="high-low">
            {data.main ? <p>H:{data.main.temp_max.toFixed()}° L:{data.main.temp_min.toFixed()}°</p> : null}
          </div>
          {data.name !=undefined &&
          <div className="preview">
            {whours[0] ? <p><img src={rainpic} alt="rain image" height="30" width="20"></img>{whours[0].will_it_rain}%</p> : null}
            {whours[0] ? <p><img src={temppic} alt="temp image" height="30" width="20"></img>{whours[0].humidity}%</p> : null}
            {whours[0] ? <p><img src={windpic} alt="wind image" height="30" width="30"></img>{whours[0].gust_mph}mph</p> : null}
          </div>
          }
        </div>
       {/* add future forecast here */}
       {data.name !=undefined &&
        <div className="wind">
          <Dial windDegree={whours[0].wind_degree}/>

          <div className='w2'>
          <InfoCard title="Wind Speed" cond={data.wind} data={data.wind.speed.toFixed()+'mph'}/>
          <InfoCard title="Pressure" cond={data.main} data={data.main.pressure+'hPa'}/>
          </div>
        </div>
       }

        <div>
          {data.name != undefined &&
              <div className="next_hours">
             

                <div className="day_date">
                <p className='subheading'>Today</p>
                <p className='subheading'>23 Mar</p>
                </div>
                <div className="test">
                {/* <p>Today</p> */}
                {/* <p>img: {whours[0].condition.}</p> */}
                {whours.map((w, index)=>(
                  <div className="contents">
                    <Whours val={w} num={index}/>
                  </div>))
                }
                </div>

              </div>

          }
        </div>

          {
            data.name != undefined &&
            <div className="WeekAhead">
              <p className='subheading'>Week Ahead</p>

              <WWeather cond={moreData.list} day="Fri" data1={moreData.list[0]} data2={moreData.list[0]}/>
              <WWeather cond={moreData.list} day="Sat" data1={moreData.list[8]} data2={moreData.list[8]}/>
              <WWeather cond={moreData.list} day="Sun"data1={moreData.list[16]} data2={moreData.list[16]}/>
              <WWeather cond={moreData.list} day="Mon"data1={moreData.list[24]} data2={moreData.list[24]}/>
              <WWeather cond={moreData.list} day="Tue" data1={moreData.list[32]} data2={moreData.list[32]}/>
              {/* <WWeather cond={moreData.list} data1={moreData.list[40].main} data2={moreData.list[40].main}/> */}
            </div>
          }
        {/* {whours[0].condition== ? } */}
        {data.name !=undefined &&
          <div className="middle">
            <div className="feels_humidity">
              <InfoCard title="Feels like" cond={data.main} data={data.main.feels_like.toFixed()+'°C'}/>
              <InfoCard title="Humidity" cond={data.main} data={data.main.humidity + '%'}/>
            </div>

            <div className="wind_pressure">
              {/* <div className="ws">
                <p className='heading'>Wind</p>
                {data.wind ? <p>{data.wind.speed.toFixed()}mph</p> : null}
                <div className="wind-dial" style={{ transform: `rotate(${windDirection}deg)` }}>
                  <div className="wind-arrow"></div>
                </div>
              </div> */}
              {/* <WDial/> */}
              {/* <Dial windDegree={whours[0].wind_degree}/> */}
              {/* <InfoCard title="Wind Speed" cond={data.wind} data={data.wind.speed.toFixed()+'mph'}/> */}
              
            </div>
            <div className="sunrise_sunset">

              <InfoCard title="Sunrise" cond={data.sys} data={new Date(data.sys.sunrise * 1000).toLocaleTimeString().slice(0,5)}/>
              <InfoCard title="Sunset" cond={data.sys} data={new Date(data.sys.sunset * 1000).toLocaleTimeString().slice(0,5)}/>
            
            </div>
            <div className="visibility_clothing">
              <InfoCard title="Visibility" cond={data.visibility} data={data.visibility/1000+'mi'} />
            {/* hello {condition} */}
              <Clothing title="Clothing" cond={condition}/>
            </div>
            
          </div>
        }

        <div className="bottom">
            <div className="Map">
              
            </div>
        </div>

        
      </div>
    </div>
  );
}

export default App;
