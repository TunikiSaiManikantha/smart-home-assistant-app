// camerasystem.js

import React from 'react';
import '../Pagescss/Cameras.css';

const Camera = () => {
    const cameraData = [
        { id: 1, section: '1st floor', status: 'Closed', imgSrc: 'path_to_image1' },
        { id: 2, section: '2nd floor (courtyard)', status: 'Opened', imgSrc: 'path_to_image2' },
        { id: 3, section: '3nd floor (courtyard)', status: 'Opened', imgSrc: 'path_to_image3' },
        { id: 4, section: '4nd floor (courtyard)', status: 'Opened', imgSrc: 'path_to_image4' },
    ];

    return (
        <div className="camera-system">
            <header className="headerc">
                <h1>Camera Security System</h1>
                <nav>
                    <button>Sensors</button>
                    <button>Cameras</button>
                </nav>
            </header>
            <div className="camera-list">
                {cameraData.map(camera => (
                    <div key={camera.id} className={`camera-card ${camera.status.toLowerCase()}`}>
                        <img src={camera.imgSrc} alt={`Camera view from ${camera.section}`} className="camera-image" />
                        <div className="camera-info">
                            <p>Section: {camera.section}</p>
                            <p>Status: {camera.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Camera;
