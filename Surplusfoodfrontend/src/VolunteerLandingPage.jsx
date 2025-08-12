import React from 'react';
import { Button, Container, Row, Col, Card, ListGroup, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const VolunteerLandingPage = () => {
  const navigate = useNavigate();
  const handleTakeFood = () => {
    navigate('/task1');
    console.log("Taking food from donor...");
  };

  const handleDeliverFood = () => {
    navigate('/task2');
    console.log("Delivering food to beneficiary...");
  };

  return (
    <Container className="mt-5" style={{marginLeft:'370px', marginTop:'200px'}}>
      <Row>
        <Col>
          <h1 className="text-center">Welcome, Volunteer!</h1>
          <p className="text-center">
            Thank you for your time and effort in helping our community. Your contribution is invaluable.
          </p>
          <Alert variant="info" className="text-center">
            Please choose an action below to get started.
          </Alert>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Take Food from Donor</Card.Title>
              <Card.Text>
                Click the button below to see the list of donors and pick up the food items they are donating.
              </Card.Text>
              <Button variant="primary" onClick={handleTakeFood}>
                Take Food
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4" >
            <Card.Body style={{height:'164px'}}>
              <Card.Title>Deliver Food to Beneficiary</Card.Title>
              <Card.Text>
                Click the button below to deliver food items from the hub to the beneficiaries.
              </Card.Text>
              <Button variant="success" onClick={handleDeliverFood}>
                Deliver Food
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  );
};

export default VolunteerLandingPage;
