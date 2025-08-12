import React, { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';

function DistanceMatrixComponent() {
  const  apiKey = "AIzaSyCVjtJhrEhuvn81SXyHxb8rjqVPevkemQ0"; 
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);

  const calculateDistance = async() => {
    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === 'OK') {
          const result = response.rows[0].elements[0];
          setDistance(result.distance.text);
          setDuration(result.duration.text);
        } else {
          console.error('Error with Distance Matrix Service:', status);
        }
      }
    );
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <div>
        <h1>Distance Matrix</h1>
        <div>
          <input
            type="text"
            placeholder="Enter origin address"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter destination address"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <button onClick={calculateDistance}>Calculate Distance</button>
        {distance && duration && (
          <p>
            Distance: {distance}, Duration: {duration}
          </p>
        )}
      </div>
    </LoadScript>
  );
}

export default DistanceMatrixComponent;
