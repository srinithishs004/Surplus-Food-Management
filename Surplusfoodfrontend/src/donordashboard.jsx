import React from 'react';
import {  Button,Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import img1 from './assets/donor1.jpg';
import img2 from './assets/donor2.jpeg';
import img3 from './assets/donor3.png';
import img4 from './assets/donor4.avif';
import { useNavigate } from 'react-router-dom';

import './DonorDashboard.css';



const DonorDashboard = () => {
  const navigate=useNavigate();
  const handleClick=()=>{

    navigate('/donorform');
  }
  // const 
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="mb-4">Your Donation is Very Important!</h1>
          <p className="lead mb-4">
            By donating excess food, you are helping to fight hunger and reduce food waste.
            Every contribution counts and makes a difference in the lives of those in need.
          </p>
          <Carousel className="mb-4">
            <Carousel.Item>
              <Image 
                src={img1} 
                alt="Food Donation 1"
                fluid 
                className="carousel-image"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image 
                src={img2} 
                alt="Food Donation 2"
                fluid
                className="carousel-image"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image 
                src={img3} 
                alt="Food Donation 3"
                fluid
                className="carousel-image"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image 
                src={img4} 
                alt="Food Donation 4"
                fluid
                className="carousel-image"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <button onClick={handleClick}>Go to Donation Page</button>
    </Container>
  );
};

export default DonorDashboard;
