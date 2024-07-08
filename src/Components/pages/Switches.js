// HomeSystem.js -> RoomSwitches.js
import '../Pagescss/Switches.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
// HomeSystem.js
import React, { useState } from 'react';
import '../Pagescss/Temperaure.css'; // Ensure this path is correct


const HomeSystem = ({ insideTemperature, outsideTemperature }) => {
  const [devices, setDevices] = useState({
    lamps: { id: 0, checked: false },
    vacuumCleaner: { id: 1, checked: false },
    wifi: { id: 2, checked: false },
    heating: { id: 3, checked: false },
    Fane: { id: 4, checked: false },
    lampOut: { id: 5, checked: false },
    lampIn: { id: 6, checked: false },
    Switches1: { id: 7, checked: false },
    Switches2: { id: 8, checked: false },
    Switches3: { id: 9, checked: false },
    
  });

  const handleToggle = (device) => {
    setDevices({
      ...devices,
      [device]: { ...devices[device], checked: !devices[device].checked },
    });
  };

  return (
    <div className="home-system">
      <header className="header">
        <h1>Welcome Home!</h1>
      </header>
      <div className="devices">
        <div className="device">
          <div className="device-icon lamps"></div>
          <h2>Lamps</h2>
          <span className="span">Room</span>
          <ToggleSwitch 
            id={devices.lamps.id} 
            checked={devices.lamps.checked} 
            onChange={() => handleToggle('lamps')} 
          />
        </div>
        <div className="device">
          <div className="device-icon vacuum-cleaner"></div>
          <h2>Vacuum Cleaner</h2>
          <span className="span">In Progress, 70% done</span>
          <ToggleSwitch 
            id={devices.vacuumCleaner.id} 
            checked={devices.vacuumCleaner.checked} 
            onChange={() => handleToggle('vacuumCleaner')} 
          />
        </div>
        <div className="device">
          <div className="device-icon wifi"></div>
          <h2>Wi-Fi</h2>
          <span className="span">Living Room</span>
          <ToggleSwitch 
            id={devices.wifi.id} 
            checked={devices.wifi.checked} 
            onChange={() => handleToggle('wifi')} 
          />
        </div>
        <div className="device">
          <div className="device-icon heating"></div>
          <h2>Heating</h2>
          <ToggleSwitch 
            id={devices.heating.id} 
            checked={devices.heating.checked} 
            onChange={() => handleToggle('heating')} 
          />
        </div>
        <div className="device">
          <div className="device-icon heating"></div>
          <h2>Fane</h2>
          <ToggleSwitch 
            id={devices.Fane.id} 
            checked={devices.Fane.checked} 
            onChange={() => handleToggle('Fane')} 
          />
        </div>
        <div className="device">
          <div className="device-icon heating"></div>
          <h2>lamp Outside</h2>
          <ToggleSwitch 
            id={devices.lampOut.id} 
            checked={devices.lampOut.checked} 
            onChange={() => handleToggle('lampOut')} 
          />
        </div>
        <div className="device">
          <div className="device-icon heating"></div>
          <h2>lamp Inside</h2>
          <ToggleSwitch 
            id={devices.lampIn.id} 
            checked={devices.lampIn.checked} 
            onChange={() => handleToggle('lampIn')} 
          />
        </div>
        <div className="device">
          <div className="device-icon heating"></div>
          <h2>Switches1</h2>
          <ToggleSwitch 
            id={devices.Switches1.id} 
            checked={devices.Switches1.checked} 
            onChange={() => handleToggle('Switches1')} 
          />
        </div>
        <div className="device">
          <div className="device-icon heating"></div>
          <h2>Switches2</h2>
          <ToggleSwitch 
            id={devices.Switches2.id} 
            checked={devices.Switches2.checked} 
            onChange={() => handleToggle('Switches2')} 
          />
        </div>
        <div className="device">
          <div className="device-icon heating"></div>
          <h2>Switches3</h2>
          <ToggleSwitch 
            id={devices.Switches3.id} 
            checked={devices.Switches3.checked} 
            onChange={() => handleToggle('Switches3')} 
          />
        </div>
      </div>
      <button className="add-device">Add New Device</button>
      <button className="turn-off">Turn Off All Devices</button>
      <div className="status">
        <div className="status-item lights">
          <h3>LIGHTS</h3>
          <span className="span">4 lamps</span>
          <span className="span">1 in use</span>
        </div>
        <div className="status-item brightness">
          <h3>BRIGHTNESS</h3>
          <span className="span">50%</span>
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

export default HomeSystem;
