const WWeather = ({day, cond, data1, data2}) => {
    return (
        <div className="wweather">
            {/* <p className='heading'>{title} </p> */}
            <p>{day}</p>

            <div className="hi_lo">
            {cond ? <p className='bold'>H:{data1.main.temp_max.toFixed()}°C</p> : null}
            {cond ? <p className='bold'>L:{data2.main.temp_min.toFixed()}°C</p> : null}
            </div>
      </div>
    );
}

export default WWeather;