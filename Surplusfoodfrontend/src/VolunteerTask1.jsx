import React, { useState, useEffect } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import './VolunteerTask1.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VolunteerTask1 = () => {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/food/volunteer');
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchFoods();
  }, []);

  const handleClick = (post) => {
    navigate('/next', { state: { food: post } });
  };

  return (
    <div style={{ marginTop: '150px' }}>
      <Container className="mt-5" style={{ marginLeft: '400px' }}>
        <h1 className="mb-4">Food Available</h1>
        {foods.map(post => (
          <Card className="food-card11 mb-4" key={post.id}>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div className="food-details11">
                <span><FaUser className="icon11" />{post.donorname}</span>
                <span><IoMdCall className="icon11" />{post.phone}</span>
                <span><FaMapMarkerAlt className="icon11" />{post.address}</span>
              </div>
              <Button onClick={() => handleClick(post)}>Take Food</Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default VolunteerTask1;
