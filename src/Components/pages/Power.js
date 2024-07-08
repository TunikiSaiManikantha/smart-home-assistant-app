// Power.js
import React, { useState, useEffect } from 'react';
import { get, ref } from 'firebase/database';
import { database } from '../../Firebase/Firebase';
import '../Pagescss/Power.css'; // Create a CSS file to style the component

const Power = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timePeriod, setTimePeriod] = useState('month');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = ref(database, 'powerUsage');
        const snapshot = await get(dataRef);
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          setData(null);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timePeriod]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const currentData = data[timePeriod];

  return (
    <div className="power-container">
      <header className="power-header">
        <h1>Power Usage</h1>
        <div className="time-periods">
          <button onClick={() => setTimePeriod('day')}>Day</button>
          <button onClick={() => setTimePeriod('week')}>Week</button>
          <button onClick={() => setTimePeriod('month')}>Month</button>
          <button onClick={() => setTimePeriod('year')}>Year</button>
        </div>
      </header>
      <div className="power-data">
        <h2>{currentData.totalUsage} kWh</h2>
        <p>{currentData.usageIncrease} increase</p>
        <div className="usage-per-room">
          {currentData.rooms.map((room, index) => (
            <div key={index}>
              <h3>{room.name}</h3>
              <p>{room.usagePercentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Power;
