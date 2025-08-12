import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

function BeneficiaryLanding() {
  return (
    <Container className="text-center mt-5" style={{marginLeft:'300px'}}>
      <Row>
        <Col>
          <h1>Welcome, Beneficiary</h1>
          <p>Manage your food requests easily and efficiently.</p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Button variant="primary" size="lg" href="/foodlist">
            Request Food
          </Button>
        </Col>
        {/* <Col>
          <Button variant="secondary" size="lg" href="/request-history">
            History of Requests
          </Button>
        </Col> */}
      </Row>

      

      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Testimonial</Card.Title>
              <Card.Text>
                "This service has been a lifesaver! I can easily get the food I need without any hassle.
                The volunteers are very helpful and the process is smooth and quick."
                <br />- Happy Beneficiary
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
    </Container>
  );
}

export default BeneficiaryLanding;
