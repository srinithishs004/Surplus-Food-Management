import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderStatus = () => {
  // Dummy data to simulate request statuses
  const [requests, setRequests] = useState([
    { id: 1, foodItem: 'Bread', status: 'Request Submitted' },
    { id: 2, foodItem: 'Milk', status: 'Request Accepted' },
    { id: 3, foodItem: 'Rice', status: 'Volunteer Taken the Order' },
    { id: 4, foodItem: 'Fruits', status: 'Order Delivered' },
  ]);

  // Function to simulate fetching data from backend
  useEffect(() => {
    // Fetch data from backend and update state
    // fetch('/api/requests')
    //   .then(response => response.json())
    //   .then(data => setRequests(data));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Request Status</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Food Item</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.foodItem}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderStatus;
