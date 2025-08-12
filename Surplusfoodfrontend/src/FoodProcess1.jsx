import React from 'react';
import './foodprocess1.css'; // Import the CSS file for styling

function VolunteerPage() {
  const hubDetails = {
    name: "Central Hub",
    address: "123 Main St, Cityville",
    contact: "555-1234",
    instructions: "Please check the temperature and packaging before proceeding."
  };

  return (
    <div className="volunteer-page">
      <h2>Hub Details</h2>
      <div className="hub-details">
        <p><strong>Hub Name:</strong> {hubDetails.name}</p>
        <p><strong>Address:</strong> {hubDetails.address}</p>
        <p><strong>Contact:</strong> {hubDetails.contact}</p>
        <p><strong>Quality Check Instructions:</strong> {hubDetails.instructions}</p>
      </div>
      <div className="fixed-bottom-button">
        <button onClick={() => console.log('Proceed to Delivery')}>
          Delivered
        </button>
      </div>
    </div>
  );
}

export default VolunteerPage;
