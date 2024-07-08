// LedStrip.js
import React, { useState } from 'react';
import '../Pagescss/Ledstrip.css';

const LedStrip = () => {
    const [color, setColor] = useState('#ffffff');
    const [intensity, setIntensity] = useState(72);
    const [centralLight, setCentralLight] = useState(true);

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handleIntensityChange = (event) => {
        setIntensity(event.target.value);
    };

    const toggleCentralLight = () => {
        setCentralLight(!centralLight);
    };

    return (
        <div className="led-strip-container">
            <h1>LED STRIP</h1>
            <div className="color-wheel">
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
            <div className="intensity-control">
                <label>Intensity: {intensity}%</label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={intensity}
                    onChange={handleIntensityChange}
                />
            </div>
            <div className="central-light-toggle">
                <label>Central Light</label>
                <input
                    type="checkbox"
                    checked={centralLight}
                    onChange={toggleCentralLight}
                />
            </div>
            <div className="modes">
                <button className="mode-btn">Custom</button>
                <button className="mode-btn">Bright</button>
                <button className="mode-btn">Dimmed</button>
                <button className="mode-btn">Gradient</button>
            </div>
        </div>
    );
};

export default LedStrip;
