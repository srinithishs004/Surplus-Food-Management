// src/components/FoodList.js

import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import FCard from './Card';

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/food/beneficiary');
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div>
      <Container style={{ marginTop: '90px', marginLeft: '450px' }}>
        {/* <h1 className='availablefoods' style=>Available Foods</h1> */}
        <Row>
          {foods.map(food => (
            <Col key={food.id} sm={12} md={6} lg={4}>
              <FCard food={food} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default FoodList;
