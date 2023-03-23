
const Clothing = ({cond}) => {
    function sd(){
        if ((cond === "Partly cloudy")||(cond === "scattered clouds")||(cond === "few clouds")||(cond === "broken clouds")){
            return <p className="info">Jumper</p>
        }
        else if ((cond === "Rain")||(cond === "light rain")||(cond === "moderate rain")||(cond === "heavy intensity rain")||(cond === "very heavy rain")||(cond === "extreme rain")||(cond === "freezing rain")||(cond === "light intensity shower rain")||(cond === "shower rain")||(cond === "heavy intensity shower rain")||(cond === "ragged shower rain")){
            return <p className="info">Rain jacket</p>
        }
        else if (cond === "Sunny"){
            return <p className="info">T-shirt</p>
        }
        else if (cond === "Snow"){
            return <p className="info">Snow jacket</p>
        }
        else{
            return <p className="info">light jacket</p>
        }
        // if (({cond} === "Rain")||({cond} === "Drizzle")||({cond} === "Thunderstorm")){
        //     return <p>"wear a raincoat"</p>
        // }    
        // else if (({cond} === "Clouds")||(cond=== "Partly Cloudy")){
        //     return <p>"wear a jacket"</p>
        // }
        // else if ({cond} === "Clear"){
        //     return <p>"wear a t-shirt"</p>
        // }
        // else if ({cond} === "Snow"){
        //     return <p>"wear a snow jacket"</p>
        // }
        // else if ({cond} == "Sunny"){
        //     return <p>"nehaal is d..."</p>
        // }
        // else{
        //     return <p>"wear a sdfsdffs"</p>
        // }
    
        

    }
    return (
        <div className="infocard">
            {/* {cond} */}
            <p className='heading'>Recommended clothing</p>
            {/* {cond ? <p className='bold'>{</p> : null} */}
            <b>{sd()}</b>
      </div>
    );
}

export default Clothing;