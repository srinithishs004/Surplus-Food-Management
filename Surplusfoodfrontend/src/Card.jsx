// src/components/FoodCard.js

import React from 'react';
import vegImage from './assets/veg.jpg';
import nonvegImage from './assets/nonveg.jpg';
import { Card, Button } from 'react-bootstrap';

function FCard({ food }) {
  let image = '';

  if (food.category === "Veg") {
    image = vegImage;
  } else {
    image = nonvegImage;
  }

  return (
    <Card style={{ width: '18rem', margin: '1rem',height:'400px', boxShadow:'0 .25rem .25rem 0 rgba(0, 0, 0, .251)' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className='one2'>{food.category}</Card.Title>
        <Card.Text>
          Available Quantity: {food.quantity}
        </Card.Text>
        <Card.Text style={{height:'50px'}}>
          {food.description}
        </Card.Text>
        <Button variant="primary" style={{marginLeft:'60px',marginTop:'1px'}}>Request Food</Button>
      </Card.Body>
    </Card>
  );
}

export default FCard;
