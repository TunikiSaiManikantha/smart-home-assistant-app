// Temperature.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Pagescss/Temperaure.css';
import { getDatabase, ref, onValue } from 'firebase/database';
import Homem2 from './Home2'; // Import the new component

const Temperature = () => {
  // State for outside temperature
  const [outsideTemperature, setOutsideTemperature] = useState(null);
  const [outsideHumidity, setOutsideHumidity] = useState(null);
  const [city, setCity] = useState('India');
  const [searchCity, setSearchCity] = useState('');

  // State for inside temperature
  const [insideTemperature, setInsideTemperature] = useState(null);
  const [insideHumidity, setInsideHumidity] = useState(null);
  const [loadingInside, setLoadingInside] = useState(true);

  // Function to fetch weather data from OpenWeatherMap
  const fetchWeatherData = async (cityName) => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: cityName,
          appid: '5e5cb14ad2c45b7c41e011b4a367c447',
          units: 'metric'
        }
      });
      const data = response.data;
      setOutsideTemperature(data.main.temp);
      setOutsideHumidity(data.main.humidity);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Function to fetch inside temperature data from Firebase
  const fetchInsideData = () => {
    const db = getDatabase();
    const insideTempRef = ref(db, 'inside/temperature');
    const insideHumidRef = ref(db, 'inside/humidity');

    onValue(insideTempRef, (snapshot) => {
      const temp = snapshot.val();
      setInsideTemperature(temp);
      setLoadingInside(false);
    }, {
      onlyOnce: true
    });

    onValue(insideHumidRef, (snapshot) => {
      const humid = snapshot.val();
      setInsideHumidity(humid);
    }, {
      onlyOnce: true
    });
  };

  useEffect(() => {
    fetchWeatherData(city);
    fetchInsideData();
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchCity.trim()) {
      setCity(searchCity);
      setSearchCity('');
    }
  };

  return (
    <>
    <br/>
      <div className="temperature-container">
        <div className="headert">
          <h2>Outside the Room</h2>
          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Enter city name" 
              value={searchCity} 
              onChange={(e) => setSearchCity(e.target.value)} 
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="thermostat">
          <div className="dial">
            <div className="temperaturet">{outsideTemperature !== null ? `${outsideTemperature}°C` : 'Loading...'}</div>
          </div>
          <div className="details">
            <p>Current temp: {outsideTemperature !== null ? `${outsideTemperature}°C` : 'Loading...'}</p>
            <p>Current humidity: {outsideHumidity !== null ? `${outsideHumidity}%` : 'Loading...'}</p>
          </div>
        </div>
      </div>
<br></br>
      <div className="temperature-container">
        <div className="headert">
          <h2>Inside the Room</h2>
        </div>
        <div className="thermostat">
          <div className="dial">
            <div className="temperaturet">{loadingInside ? 'No data loading...' : `${insideTemperature}°C`}</div>
          </div>
          <div className="details">
            <p>Current temp: {loadingInside ? 'No data loading...' : `${insideTemperature}°C`}</p>
            <p>Current humidity: {loadingInside ? 'No data loading...' : `${insideHumidity}%`}</p>
          </div>
        </div>
      </div>

      <Homem2 
        insideTemperature={insideTemperature} 
        outsideTemperature={outsideTemperature}
      />
      <br></br>
    </>
  );
};

export default Temperature;
