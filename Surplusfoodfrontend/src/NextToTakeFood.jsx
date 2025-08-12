import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const FoodDetails = () => {
  const location = useLocation();
  const { food } = location.state;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/thankyouvolunteer");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h5">Food Details</Card.Header>
            <Card.Body>
              <Card.Title>{food.name}</Card.Title>
              <Card.Text>
                <strong>Quantity:</strong> {food.quantity} <br />
                <strong>Pickup Location:</strong> {food.pickupLocation} <br />
                <strong>Delivery Location:</strong> {food.deliveryLocation} <br />
                <strong>Pickup Time:</strong> {new Date(food.pickupTime).toLocaleString()} <br />
                <strong>Expected Delivery Time:</strong> {new Date(food.deliveryTime).toLocaleString()} <br />
                <strong>Donor:</strong> {food.donorName} <br />
                <strong>Volunteer:</strong> {food.volunteerName} <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Button 
            variant="success" 
            className="fixed-bottom m-3"
            style={{ width: 'calc(100% - 2rem)' }}
            onClick={handleClick}
          >
            Delivered to Hub
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FoodDetails;
