import React, { useState } from 'react';

const WindDial = () => {
  const [windDirection, setWindDirection] = useState(0);

  const handleWindChange = (event) => {
    setWindDirection(event.target.value);
  };

  return (
    <div>
      <h2>Wind Direction: {windDirection} degrees</h2>
      <input type="range" min="0" max="360" value={windDirection} onChange={handleWindChange} />
      <img src={`https://raw.githubusercontent.com/manifestinteractive/appleweathericons/main/icons/wind-arrow-${windDirection}.svg`} alt="wind arrow" />
    </div>
  );
};

export default WindDial;
