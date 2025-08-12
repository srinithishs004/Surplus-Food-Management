import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './RequestSuccess.css';

const RequestSuccess = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <div className="success-animation">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
          <h1 className="mt-3">Request Successfully Submitted</h1>
          <p className="lead">Thank you for your submission. We will process your request shortly.</p>
          <Button variant="primary" as={Link} to="/">Go Back to Home</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default RequestSuccess;
