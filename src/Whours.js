const Whours = ({val, num}) => {
    
 
    return(

        <div className={"hour"} id={"hour"+num}>
            <h3>{val.temp_c}°C</h3>
            <h5><img src= {val.condition.icon} ></img></h5>
            {/* <p>{val.time}</p> */}
            <h3>{(new Date(val.time_epoch * 1000).toLocaleTimeString()).slice(0,5)}</h3>

              
              
        </div>
    )
}

export default Whours;