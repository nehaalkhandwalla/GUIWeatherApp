
const InfoCard = ({ contents, title, cond, data}) => {
    return (
       
        <div className="infocard">
            <p className='heading'>{title} </p>


            {cond ? <p className='info'>{data}</p> : null}
      </div>
    );
}

export default InfoCard;