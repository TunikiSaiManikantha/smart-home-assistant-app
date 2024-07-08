// HomeSystem.js
import React from 'react';
import '../Pagescss/Home2.css';
import '../Pagescss/Temperaure.css'; // Ensure this path is correct

const Homem2 = ({ insideTemperature, outsideTemperature }) => {
  return (
    <div className="home-system">
      <div className="status">
        <div className="status-item lights">
          <h3>LIGHTS</h3>
          <span className="span"> 4 lamps</span> 
          <span className="span"> 1 in use</span> 
        </div>
        <div className="status-item brightness">
          <h3>BRIGHTNESS</h3>
          <span className="span"> 50%</span> 
        </div>

        <div className="status-itemt temperature">
            <h6>TEMPERATURE</h6>
         <div>
           <span className="spant"> Inside the Room </span>
           <span className="spant"> {insideTemperature !== null ? `${insideTemperature}°C` : 'No data loading...'} </span>
         </div>
         <div>
            <span className="spant"> Outside the Room </span>
            <span className="spant"> {outsideTemperature !== null ? `${outsideTemperature}°C` : 'Loading...'} </span>
          </div>
         </div>

      </div>

    </div>
  );
};

export default Homem2;