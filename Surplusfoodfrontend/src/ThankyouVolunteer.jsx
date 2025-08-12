import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
      <div style={{marginTop:'100px'}}>
    <Container className="mt-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1>Thank You!</h1>
          <p>Your effort to deliver the food is greatly appreciated. Together, we are making a difference!</p>
          <Button variant="primary" onClick={handleBackToHome}>
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ThankYou;
