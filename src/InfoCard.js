
const InfoCard = ({ title, cond, data, cn }) => {
    return (
        <div className="infocard">
            <p className='heading'>{title} </p>
            {cond ? <p className='bold'>{data}</p> : null}
      </div>
    );
}

export default InfoCard;