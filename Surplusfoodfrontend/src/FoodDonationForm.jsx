import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FoodDonationForm = () => {
  const navigate=useNavigate();
  // const location=uselocation();
  const [formData, setFormData] = useState({
    category: '',
    postdate: '',
    expirydate: '',
    donorname:'',
    phone:'',
    description: '',
    quantity:'',

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/api/food/newfood', formData)
      .then(response => {
        alert('Donation submitted successfully!');
        navigate('/thankyou');
      })
      .catch(error => {
        alert('Failed to submit donation');
      });

        

      
      
  };


  return (
    <Container className="mt-5">
    <div  style={{marginTop:'200px',width:'600px',marginLeft:'350px'}}>
    
      <h2>Food Donation Form</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFoodDescription">
      <Form.Label>Donor Name</Form.Label>
              <br/>
              <Form.Control
                type="text"
                placeholder="Enter Donor name"
                name="donorname"
                value={formData.donorname}
                onChange={handleChange}
                required
              />
              <br/>
              
            </Form.Group>
            <Form.Group controlId="formFoodDescription">
            <Form.Label>Donor Phone</Form.Label>
              <br/>
              <Form.Control
                type="text"
                placeholder="Enter Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <br/>
              
            </Form.Group>
            
        <Form.Group controlId="formCategory">
          <Form.Label>Category of Food</Form.Label>
          <Form.Control as="select" name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </Form.Control><br/>
        </Form.Group>

        <Form.Group controlId="formTotalCount">
          <Form.Label>Total Count of Food</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          /><br/>
        </Form.Group>

        <Form.Group controlId="formPostingDate">
          <Form.Label>Posting Date</Form.Label>
          <Form.Control
            type="date"
            name="postdate"
            value={formData.postdate}
            onChange={handleChange}
            required
          /><br/>
        </Form.Group>

        <Form.Group controlId="formExpiryDate">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control
            type="date"
            name="expirydate"
            value={formData.expirydate}
            onChange={handleChange}
            required
          />
          <br/>
        </Form.Group>

        <Form.Group controlId="formFoodDescription">
          <Form.Label>Food Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </Container>
  );
};

export default FoodDonationForm;
