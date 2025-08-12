// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './Register.css';

// function Register() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     username: '',
//     email: '',
//     password: '',
//     gender: '',
//     userType: '',
//     address: '',
//     phone: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: name === 'phone' ? Number(value) : value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data: ", formData);
//     navigate("/")

//     fetch('http://localhost:8081/api/users/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           alert('Registration successful!');
//           navigate('/donorform');
//         } else {
//           alert('Registration failed: ' + data.error);
//         }
//       })
//       .catch(error => {
//         // alert(error);
//         console.log(error);
//       });
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-md-center" style={{ width: '900px', marginLeft: '200px', borderRadius: '15px' }}>
//         <Col md={6}>
//           <div className="register-header text-center mb-4">
//             <h2>Create Your Account</h2>
//           </div>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formFullName">
//               <Form.Label>Full Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your full name"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formUsername">
//               <Form.Label>Username</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formPhone">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter your phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formGender">
//               <Form.Label>Gender</Form.Label>
//               <Form.Control
//                 as="select"
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="others">Others</option>
//               </Form.Control>
//             </Form.Group>
//             <Form.Group controlId="formUserType">
//               <Form.Label>User Type</Form.Label>
//               <Form.Control
//                 as="select"
//                 name="userType"
//                 value={formData.userType}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select User Type</option>
//                 <option value="donor">Donor</option>
//                 <option value="volunteer">Volunteer</option>
//                 <option value="beneficiary">Beneficiary</option>
//               </Form.Control>
//             </Form.Group>
//             <Form.Group controlId="formAddress">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 style={{ border: '.125rem solid transparent' }}
//                 type="text"
//                 placeholder="Enter your address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit" block>
//               Register
//             </Button>
//           </Form>
//           <div className="text-center mt-3">
//             <p>
//               Already have an account? <a href="/login">Sign in here.</a>
//             </p>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    gender: '',
    userType: '',
    address: '',
    phone: ''
  });

  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({
    phone: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'phone' ? Number(value) : value
    });
  };

  const validateForm = () => {
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;
    let errors = { phone: '', email: '' };

    if (!phoneRegex.test(formData.phone)) {
      valid = false;
      errors.phone = 'Phone number must be exactly 10 digits.';
    }

    if (!emailRegex.test(formData.email)) {
      valid = false;
      errors.email = 'Email must be valid and contain @ and .';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false || !validateForm()) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      console.log("Form Data: ", formData);

      fetch('http://localhost:8081/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            alert('Registration successful!');
            navigate('/donorform');
          } else {
            alert('Registration failed: ' + data.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

    setValidated(true);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center" style={{ width: '900px', marginLeft: '200px', borderRadius: '15px' }}>
        <Col md={6}>
          <div className="register-header text-center mb-4">
            <h2>Create Your Account</h2>
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your full name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a username.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email || 'Please enter a valid email address.'}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone || 'Please enter a valid phone number.'}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a password with at least 6 characters.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select your gender.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formUserType">
              <Form.Label>User Type</Form.Label>
              <Form.Control
                as="select"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                required
              >
                <option value="">Select User Type</option>
                <option value="donor">Donor</option>
                <option value="volunteer">Volunteer</option>
                <option value="beneficiary">Beneficiary</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a user type.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                style={{ border: '.125rem solid transparent' }}
                type="text"
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your address.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Register
            </Button>
          </Form>
          <div className="text-center mt-3">
            <p>
              Already have an account? <a href="/login">Sign in here.</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
