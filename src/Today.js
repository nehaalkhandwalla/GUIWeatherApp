import InfoCard from "./InfoCard"
import Clothing from "./Clothing"

const Today = ({data, condition}) => {

    return (
    <div className="middle">
            <div className="feels_humidity">
              <InfoCard title="Feels like" cond={{data}.main} data={{data}.main.feels_like.toFixed()+'°C'}/>
              <InfoCard title="Humidity" cond={{data}.main} data={{data}.main.humidity + '%'}/>
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
              <InfoCard title="Wind Speed" cond={{data}.wind} data={{data}.wind.speed.toFixed()+'mph'}/>
              
              <InfoCard title="Pressure" cond={{data}.main} data={{data}.main.pressure+'hPa'}/>
            </div>
            <div className="sunrise_sunset">

              <InfoCard title="Sunrise" cond={{data}.sys} data={new Date({data}.sys.sunrise * 1000).toLocaleTimeString().slice(0,5)}/>
              <InfoCard title="Sunset" cond={{data}.sys} data={new Date({data}.sys.sunset * 1000).toLocaleTimeString().slice(0,5)}/>
            
            </div>
            <div className="visibility_clothing">
              <InfoCard title="Visibility" cond={{data}.visibility} data={{data}.visibility/1000+'mi'} />
            {/* hello {condition} */}
              <Clothing title="Clothing" cond={{condition}}/>
            </div>
            
          </div>
)}


 export default Today;