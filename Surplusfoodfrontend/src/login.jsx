// src/components/Login.js

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import './sidebar.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  console.log("bkn",JSON.stringify({ username , password }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const abc = {
      "email": "Sri@gmail.com",
      "password": "Sri@123"
    };
      const response = await fetch("http://localhost:8081/api/users/login", {
      method: 'POST',
        headers: {
          // 'Accept': 'application/json , text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "username": username,
        "password":password}),
      },);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data) {
        console.log(data);
        sessionStorage.setItem('user', JSON.stringify(data));
        if (data.userType === 'donor') {
          navigate('/donor');
        } 
        
        else if(data.userType === 'volunteer') {
          navigate('/volunteer');
        }
        else if(data.userType === 'admin'){
          navigate('/qualitycheck');
        }
        else{
          navigate('/beneficiary')
        }
      }
  };

  return (
    <div>
      <Container className="mt-5">
        <div className='Contain' style={{ marginTop: '300px', width: '900px', marginLeft: '200px', borderRadius: '15px' }}>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <div className="login-header text-center mb-4">
                <h2>Sign In to Your Surplus Food Management Account</h2>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                  Sign In
                </Button>
              </Form>
              <div className="text-center mt-3">
                <p>
                  Don’t have an account? <a href="/register">Create one here.</a>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Login;
