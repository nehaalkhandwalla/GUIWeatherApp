import React from 'react';
import arrow from './assets/arrow.png';

const Dial = ({ windDegree }) => {
  const arrowStyle = {
    transform: `rotate(${windDegree}deg)`,
    transition: 'transform 0.5s ease',
    // bordercolor: 'red',
  };

  const degreeMarkings = [];
  for (let i = 0; i < 360; i += 30) {
    const degree = i;
    const degreeStyle = {
      transform: `rotate(${degree - 90}deg) translateX(80px) rotate(${-degree + 90}deg)`,
      position: 'absolute',
      top: '45%',
      left: '45%',
      transformOrigin: 'center',
      color: '#333',
      fontSize: '16px',
      width: '1px',
      height: '1px',
      lineHeight: '20px',
      textAlign: 'center',
    };
    degreeMarkings.push(<div key={degree} style={degreeStyle}>{degree}</div>);
  }

  const unitStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    fontSize: '15px',
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <div className="dial">
      <div className="degree-markings">{degreeMarkings}</div>
      <img src={arrow} className="arrow"
style={arrowStyle} />
<div style={unitStyle}>Wind hh</div>
</div>
);
};

export default Dial;

