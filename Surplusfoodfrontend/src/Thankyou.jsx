import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
    

function ThankYouDonor() {

  return (
      <div style={{marginTop:'150px',marginLeft:'200px'}}>
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1>Thank You for Your Generosity!</h1>
          <p>Your donation makes a significant difference in the lives of those in need.</p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card className="p-3">
            <Card.Body>
              <Card.Title>Your Donation Details</Card.Title>
              <Card.Text>
                Thank you for donating food to our community. Your kindness helps us fight hunger and reduce food waste.
                <br />
                We will ensure that your donation reaches those in need as soon as possible.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2>How Your Donation Helps</h2>
          <p>
            Your donation helps us provide nutritious meals to families and individuals facing food insecurity. Every donation counts and makes a big impact.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2>Share Your Good Deed</h2>
          <p>
            Spread the word about your donation and encourage others to contribute. Together, we can create a more supportive and caring community.
          </p>
          <Button variant="primary" size="lg" href="/donor">
            Go to Home
          </Button>


        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default ThankYouDonor;
