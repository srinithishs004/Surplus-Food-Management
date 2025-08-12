import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const TaskfromBeneficiary = () => {
  const requests = [
    {
      id: 1,
      beneficiary: 'Beneficiary A',
      address: '123 Main St',
      requestDetails: 'Requesting vegetables and bread.',
      status: 'Pending',
    },
    {
      id: 2,
      beneficiary: 'Beneficiary B',
      address: '456 Elm St',
      requestDetails: 'Requesting canned goods and pasta.',
      status: 'Pending',
    },
    {
      id: 3,
      beneficiary: 'Beneficiary C',
      address: '789 Oak St',
      requestDetails: 'Requesting fruits and dairy products.',
      status: 'Pending',
    },
  ];

  const handleAcceptRequest = (id) => {
    // Logic to handle accepting the request
    console.log(`Accepted request ID: ${id}`);
  };

  return (
    <Container className="mt-5" >
      <Row>
        <Col>
          <h1 className="text-center">Available Requests</h1>
          <p className="text-center">
            Below are the current requests from beneficiaries. Please review and accept the ones you can fulfill.
          </p>
        </Col>
      </Row>
      <Row className="mt-4" style={{marginleft:'400px'}}>
        {requests.map((request) => (
          <Col md={12} key={request.id} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Row>
                  <Col md={8}>
                    <Card.Title>{request.beneficiary}</Card.Title>
                    <Card.Text>
                      <strong>Address:</strong> {request.address}
                    </Card.Text>
                    <Card.Text>
                      <strong>Request Details:</strong> {request.requestDetails}
                    </Card.Text>
                    <Card.Text>
                      <strong>Status:</strong> {request.status}
                    </Card.Text>
                  </Col>
                  <Col md={4} className="d-flex align-items-center justify-content-center">
                    <Button variant="success" style={{backgroundColor:'blue'}} onClick={() => handleAcceptRequest(request.id)}>
                      Accept Request
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TaskfromBeneficiary;
