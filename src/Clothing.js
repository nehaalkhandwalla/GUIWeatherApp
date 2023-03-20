
const Clothing = ({cond}) => {
    function sd(){
        if ({cond} == "Rain"){
            return <p>"wear a raincoat"</p>
        }    
        else if ({cond} == "Clouds"){
            return <p>"wear a big jacker"</p>
        }
        else if ({cond} == "Clear"){
            return <p>"wear a t-shirt"</p>
        }
        

    }
    return (
        <div className="clothing">
            <p className='heading'>{cond}</p>
            {/* {cond ? <p className='bold'>{</p> : null} */}
            {sd()}
      </div>
    );
}

export default Clothing;